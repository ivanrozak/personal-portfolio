import { expect, test } from "@playwright/test";

const errors: string[] = [];
test.beforeEach(async ({ page }) => {
  errors.length = 0;
  page.on("pageerror", error => errors.push(error.message));
});
test.afterEach(() => expect(errors).toEqual([]));

const fitsViewport = (page: import("@playwright/test").Page) => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);

test("homepage shows the hero, selected work, experience, and contact", async ({ page }) => {
  await page.goto("/");
  const heading = page.getByRole("heading", { level: 1 });
  await expect(heading).toContainText("Hi, I’m Ivan.");
  await expect(heading).toContainText("I turn ideas into working software.");
  await expect(page.getByText("Jakarta, ID · GMT+7")).toBeVisible();
  await expect(page.getByText(/\d{2}:\d{2}/).first()).toBeVisible();
  for (const label of ["LinkedIn", "GitHub", "Email", "Resume (PDF)"]) await expect(page.locator(".hero").getByRole("link", { name: label, exact: true })).toBeVisible();
  await expect(page.locator("#projects .work-card")).toHaveCount(3);
  for (const title of ["Yuk Puncak", "Geolitix", "Pixelleven"]) await expect(page.locator("#projects").getByRole("heading", { name: title })).toBeVisible();
  await expect(page.locator("#projects").getByText("YesDok")).toHaveCount(0);
  await expect(page.locator("#experience .experience-row")).toHaveCount(5);
  await expect(page.locator("#experience")).toContainText("Daruma");
  await expect(page.locator("#experience")).toContainText("Lead Web Developer");
  await expect(page.locator("#contact")).toBeVisible();
  await expect(page.getByRole("link", { name: "WhatsApp" })).toHaveAttribute("href", "https://wa.me/6281234136030");
  await expect(page.locator("html")).toHaveClass(/lenis/);
  expect(await fitsViewport(page)).toBe(true);
  await page.getByRole("link", { name: "All projects" }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.locator(".archive-project")).toHaveCount(12);
});

test("navigation reaches every page and the theme toggle switches and remembers the theme", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/dark/);
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  await nav.getByRole("link", { name: "Resume" }).click();
  await expect(page).toHaveURL(/\/resume$/);
  await expect(nav.getByRole("link", { name: "Resume" })).toHaveAttribute("aria-current", "page");
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).not.toHaveClass(/dark/);
  await nav.getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.locator("html")).not.toHaveClass(/dark/);
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.getByRole("link", { name: "Ivan Rozak home" }).click();
  await expect(page).toHaveURL(/\/$/);
});

test("resume page matches the CV and offers the PDF", async ({ page }) => {
  await page.goto("/resume");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Ivan Rozak");
  await expect(page.getByText("Open to full-time and remote roles")).toBeVisible();
  for (const company of ["PT Yesdok Indonesia", "Rintisan", "Daruma", "PT Nashta Global Utama"]) await expect(page.getByRole("heading", { name: company })).toBeVisible();
  await expect(page.getByText("Lead Web Developer (2023 — Present)", { exact: false })).toBeVisible();
  await expect(page.getByRole("heading", { name: "YukPuncak" })).toBeVisible();
  await expect(page.getByText(/case study/i)).toHaveCount(0);
  await expect(page.getByText("Frontend Engineer · 6-month contract")).toBeVisible();
  await expect(page.getByText("Resume · Updated", { exact: false })).toBeVisible();
  const pdf = page.getByRole("link", { name: "Download PDF" });
  await expect(pdf).toHaveAttribute("href", "/Ivan_Rozak_CV.pdf");
  const response = await page.request.get("/Ivan_Rozak_CV.pdf");
  expect(response.ok()).toBe(true);
  expect(response.headers()["content-type"]).toContain("application/pdf");
  expect(await fitsViewport(page)).toBe(true);
});

test("old about and cv URLs redirect to the resume", async ({ page }) => {
  for (const route of ["/about", "/cv"]) {
    await page.goto(route);
    await expect(page).toHaveURL(/\/resume$/);
  }
});

test("archive search and category combine, recover from empty results, and preserve scope", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.locator(".archive-project")).toHaveCount(12);
  await expect(page.getByText("Lumina", { exact: true })).toHaveCount(0);
  await page.getByRole("searchbox", { name: "Search projects" }).fill("rintisan");
  await expect(page.locator(".archive-project")).toHaveCount(2);
  await expect(page.getByRole("status")).toContainText("2 projects");
  await page.getByRole("button", { name: "Independent" }).click();
  await expect(page.getByRole("heading", { name: "No projects found." })).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(page.locator(".archive-project")).toHaveCount(12);
  await page.getByRole("button", { name: "Independent" }).click();
  await expect(page.locator(".archive-project")).toHaveCount(2);
  await expect(page.getByRole("heading", { name: "Pixelleven", exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Client work" }).click();
  await expect(page.locator(".archive-project")).toHaveCount(10);
  await expect(page.locator(".archive-project").filter({ has: page.getByRole("heading", { name: "Kasheer", exact: true }) })).toContainText("Website Developer");
  await page.getByRole("button", { name: "All", exact: false }).first().click();
  expect(await fitsViewport(page)).toBe(true);
});

test("content remains visible without JavaScript", async ({ browser, baseURL, isMobile }) => {
  test.skip(isMobile);
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${baseURL}/`);
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator(".hero-body")).toBeVisible();
  await expect(page.locator("#projects .work-card")).toHaveCount(3);
  await page.goto(`${baseURL}/projects`);
  await expect(page.locator(".archive-project")).toHaveCount(12);
  await page.goto(`${baseURL}/resume`);
  await expect(page.locator(".resume-entry").first()).toBeVisible();
  await context.close();
});

test("scroll reveals finish everywhere and are switched off for reduced motion", async ({ page, browser, baseURL }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-motion", "on");
  for (let y = 0; y <= 6000; y += 500) { await page.evaluate(top => window.scrollTo(0, top), y); await page.waitForTimeout(80); }
  await expect(page.locator("[data-reveal]:not([data-revealed])")).toHaveCount(0);
  await expect(page.locator("#experience .experience-row").last().locator(".experience-text")).toHaveCSS("opacity", "1");
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const reduced = await context.newPage();
  await reduced.goto(`${baseURL}/`);
  await expect(reduced.locator("html")).not.toHaveAttribute("data-motion", "on");
  await expect(reduced.locator("#experience .experience-row").last().locator(".experience-text")).toHaveCSS("opacity", "1");
  await context.close();
});

test("responsive layouts fit narrow phones and intermediate screens", async ({ page, isMobile }) => {
  test.skip(isMobile);
  for (const width of [320, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/", "/projects", "/resume"]) {
      await page.goto(route);
      expect(await fitsViewport(page)).toBe(true);
    }
  }
});

test("project enquiry dialog validates, prepares a complete email brief, and restores focus", async ({ page }) => {
  await page.goto("/");
  const trigger = page.locator("#contact").getByRole("button", { name: "Email me" });
  await trigger.click();
  const dialog = page.getByRole("dialog", { name: "Let’s build something." });
  await expect(dialog).toBeVisible();
  await expect(page.locator("html")).toHaveCSS("overflow", "hidden");
  await expect(page.locator("html")).toHaveClass(/lenis-stopped/);
  await dialog.getByRole("button", { name: "Continue in email" }).click();
  await expect(dialog.locator("input:invalid")).not.toHaveCount(0);
  await dialog.getByLabel("Your name", { exact: true }).fill("Alex Morgan");
  await dialog.getByLabel("Email address", { exact: true }).fill("alex@example.com");
  await dialog.getByLabel("What do you need?").selectOption({ label: "A website or landing page" });
  await dialog.getByLabel("A little about the project").fill("We need a clear website for our new business, with a product catalogue.");
  await dialog.getByLabel("Budget range").fill("IDR 20–40 million");
  await dialog.getByLabel("Timeline").selectOption({ label: "In 1–3 months" });
  await dialog.getByRole("button", { name: "Continue in email" }).click();
  const href = await dialog.getByRole("link", { name: "Open the draft again" }).getAttribute("href");
  expect(href).toContain("mailto:ivanrozack@gmail.com?");
  expect(decodeURIComponent(href ?? "")).toContain("alex@example.com");
  expect(decodeURIComponent(href ?? "")).toContain("IDR 20–40 million");
  await dialog.getByRole("button", { name: "Close project enquiry" }).click();
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await expect(page.locator("html")).not.toHaveClass(/lenis-stopped/);
  await trigger.click();
  await expect(dialog.getByLabel("Your name", { exact: true })).toHaveValue("Alex Morgan");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
});

test("sitemap, robots, and structured data are published", async ({ page }) => {
  const sitemap = await (await page.request.get("/sitemap.xml")).text();
  for (const path of ["/", "/resume", "/projects"]) expect(sitemap).toContain(`<loc>https://ivanrozak.com${path}</loc>`);
  const robots = await (await page.request.get("/robots.txt")).text();
  expect(robots).toContain("Sitemap: https://ivanrozak.com/sitemap.xml");
  await page.goto("/");
  const schema = JSON.parse((await page.locator('script[type="application/ld+json"]').textContent())!);
  expect(schema["@type"]).toBe("Person");
  expect(schema.jobTitle).toBe("Software Engineer");
});

test("Open Graph and Twitter cards use real landscape images and correct page metadata", async ({ page, isMobile }) => {
  test.skip(isMobile);
  for (const route of ["/", "/projects", "/resume"]) {
    // Social crawlers must receive the image URL in server HTML without JavaScript.
    const crawlerResponse = await page.request.get(route, { headers: { "user-agent": "WhatsApp/2.24" } });
    expect(crawlerResponse.ok()).toBe(true);
    const html = await crawlerResponse.text();
    expect(html).toContain('property="og:image" content="https://ivanrozak.com/social/portfolio-og-v3.png"');
    expect(html).toContain('name="twitter:image" content="https://ivanrozak.com/social/portfolio-twitter-v3.png"');
    await page.goto(route);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
    await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute("content", "1200");
    await expect(page.locator('meta[property="og:image:height"]')).toHaveAttribute("content", "630");
    const canonical = await page.locator('meta[property="og:url"]').getAttribute("content");
    expect(new URL(canonical!).pathname).toBe(route);
    expect(new URL(canonical!).origin).toBe("https://ivanrozak.com");
    for (const [selector, pathname, height] of [
      ['meta[property="og:image"]', "/social/portfolio-og-v3.png", 630],
      ['meta[name="twitter:image"]', "/social/portfolio-twitter-v3.png", 600],
    ] as const) {
      const url = new URL((await page.locator(selector).getAttribute("content"))!);
      expect(url.pathname).toBe(pathname);
      expect(url.origin).toBe("https://ivanrozak.com");
      const response = await page.request.get(url.pathname + url.search);
      expect(response.ok()).toBe(true);
      expect(response.headers()["content-type"]).toContain("image/png");
      const bytes = await response.body();
      expect(bytes.subarray(1, 4).toString()).toBe("PNG");
      expect(bytes.readUInt32BE(16)).toBe(1200);
      expect(bytes.readUInt32BE(20)).toBe(height);
    }
  }
});
