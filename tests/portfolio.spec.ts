import { expect, test } from "@playwright/test";

const errors: string[] = [];
test.beforeEach(async ({ page }) => {
  errors.length = 0;
  page.on("pageerror", error => errors.push(error.message));
});
test.afterEach(() => expect(errors).toEqual([]));

test("homepage has the approved sections and complete project archive navigation", async ({ page, isMobile }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Your next idea.");
  await expect(page.locator("#projects")).toBeVisible();
  await expect(page.locator("#services")).toBeVisible();
  await expect(page.locator("#about")).toBeVisible();
  await expect(page.locator("#contact")).toBeVisible();
  await expect(page.locator("html")).toHaveClass(/lenis/);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const image = page.getByAltText("Ivan Rozak", { exact: true });
  await expect(image).toBeVisible();
  await expect.poll(() => image.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
  const link = page.locator(isMobile ? ".mobile-archive-link a" : ".desktop-archive-link");
  await link.click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.locator(".archive-project")).toHaveCount(12);
  await page.getByRole("link", { name: "Back to home" }).click();
  await expect(page).toHaveURL(/\/$/);
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
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test("service accordion is keyboard operable and updates its expanded panel", async ({ page }) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Web apps & business tools" });
  await trigger.focus();
  await page.keyboard.press("Enter");
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("region", { name: "Web apps & business tools" })).toContainText("Rintisan Billing");
  await expect(page.getByRole("button", { name: "Websites that work harder" })).toHaveAttribute("aria-expanded", "false");
});

test("desktop marquee pauses and resumes continuously without reversing or jumping", async ({ page, isMobile }) => {
  test.skip(isMobile);
  await page.goto("/");
  const section = page.locator("#projects");
  await section.scrollIntoViewIfNeeded();
  await page.mouse.move(1, 1);
  const sample = (duration: number) => page.evaluate(duration => new Promise<{ time: number; x: number[]; width: number }[]>(resolve => {
    const tracks = Array.from(document.querySelectorAll<HTMLElement>(".marquee-track"));
    const rows: { time: number; x: number[]; width: number }[] = [];
    const start = performance.now();
    const tick = () => {
      rows.push({ time: performance.now(), x: tracks.map(element => new DOMMatrixReadOnly(getComputedStyle(element).transform).m41), width: tracks[0].querySelector(".marquee-group")!.getBoundingClientRect().width });
      if (performance.now() - start < duration) requestAnimationFrame(tick); else resolve(rows);
    };
    requestAnimationFrame(tick);
  }), duration);
  const verify = (rows: Awaited<ReturnType<typeof sample>>) => {
    for (let i = 1; i < rows.length; i++) {
      for (let track = 0; track < 2; track++) {
        const width = rows[i].width;
        let delta = rows[i].x[track] - rows[i - 1].x[track];
        delta -= Math.round(delta / width) * width;
        expect(delta * (track === 0 ? -1 : 1)).toBeGreaterThanOrEqual(-0.025);
        expect(Math.abs(delta)).toBeLessThanOrEqual(20 * Math.min(rows[i].time - rows[i - 1].time, 40) / 1000 + 0.1);
      }
    }
  };
  await section.hover({ position: { x: 30, y: 40 } });
  await expect(section).toHaveAttribute("data-motion-state", "running");
  const moving = await sample(250);
  verify(moving);
  expect(Math.abs(moving.at(-1)!.x[0] - moving[0].x[0])).toBeGreaterThan(2);
  const card = page.locator('.marquee-group:not([aria-hidden]) .preview-card').first();
  for (let cycle = 0; cycle < 3; cycle++) {
    await card.hover({ force: true });
    await expect(section).toHaveAttribute("data-motion-state", "paused");
    const braking = await sample(450);
    verify(braking);
    expect(Math.abs(braking.at(-1)!.x[0] - braking.at(-3)!.x[0])).toBeLessThan(0.025);
    await expect(card.locator(".preview-image img")).toHaveCSS("transform", "none");
    await section.hover({ position: { x: 30, y: 40 } });
    await expect(section).toHaveAttribute("data-motion-state", "running");
    verify(await sample(450));
  }
  const rapid = sample(900);
  for (let i = 0; i < 4; i++) {
    await card.hover({ force: true });
    await page.waitForTimeout(40);
    await section.hover({ position: { x: 30, y: 40 } });
    await page.waitForTimeout(40);
  }
  verify(await rapid);
  await card.focus();
  await expect(section).toHaveAttribute("data-motion-state", "paused");
  await expect.poll(async () => (await card.boundingBox())?.x).toBeGreaterThanOrEqual(-1);
  await page.getByRole("button", { name: "Pause motion" }).click();
  await page.mouse.move(1, 1);
  await expect(section).toHaveAttribute("data-paused", "true");
  verify(await sample(300));
  await page.getByRole("button", { name: "Resume motion" }).click();
  await expect(section).toHaveAttribute("data-motion-state", "running");
  verify(await sample(450));
  await expect(page.locator('.marquee-group[aria-hidden="true"] a:not([tabindex="-1"])')).toHaveCount(0);
});

test("mobile uses native manual swipe with readable descriptions and working navigation", async ({ page, isMobile, context }) => {
  test.skip(!isMobile);
  await page.goto("/");
  await expect(page.locator(".marquee-desktop")).toBeHidden();
  const swipe = page.locator(".project-swipe");
  await swipe.scrollIntoViewIfNeeded();
  await expect(swipe.locator(".touch-description").first()).toBeVisible();
  expect(await swipe.evaluate(element => element.scrollLeft)).toBe(0);
  const box = await swipe.boundingBox();
  if (!box) throw new Error("Swipe area missing");
  const client = await context.newCDPSession(page);
  const y = box.y + 70;
  await client.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x: 315, y }] });
  for (const x of [275, 225, 175, 125, 75]) {
    await client.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [{ x, y }] });
  }
  await client.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
  await expect.poll(() => swipe.evaluate(element => element.scrollLeft)).toBeGreaterThan(150);
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "About", exact: true }).click();
  await expect(page.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
  await expect(page).toHaveURL(/#about$/);
});

test("reduced motion disables smooth scrolling and replaces autoplay with manual exploration", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("html")).not.toHaveClass(/lenis/);
  await expect(page.locator(".marquee-desktop")).toBeHidden();
  await expect(page.locator(".project-swipe")).toBeVisible();
  await expect(page.locator(".hero [data-word]").first()).toHaveCSS("filter", "none");
  await expect(page.locator(".hero [data-word]").first()).toHaveCSS("opacity", "1");
});

test("content remains visible without JavaScript", async ({ browser, baseURL, isMobile }) => {
  test.skip(isMobile);
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${baseURL}/`);
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator(".hero [data-word]").first()).toHaveCSS("opacity", "1");
  await page.goto(`${baseURL}/projects`);
  await expect(page.locator(".archive-project")).toHaveCount(12);
  await context.close();
});

test("heading reveal combines blur and movement, then settles to sharp readable text", async ({ page, isMobile }) => {
  test.skip(isMobile);
  await page.addInitScript(() => {
    const samples: { filter: string; transform: string }[] = [];
    (window as Window & { revealSamples?: typeof samples }).revealSamples = samples;
    let frames = 0;
    const sample = () => {
      const word = document.querySelector(".hero [data-word]");
      if (word) {
        const style = getComputedStyle(word);
        samples.push({ filter: style.filter, transform: style.transform });
        frames++;
      }
      if (frames < 100) requestAnimationFrame(sample);
    };
    requestAnimationFrame(sample);
  });
  await page.goto("/");
  await expect.poll(() => page.evaluate(() => (window as Window & { revealSamples?: { filter: string }[] }).revealSamples?.some(sample => sample.filter !== "none" && sample.filter !== "blur(0px)"))).toBe(true);
  await expect(page.locator(".hero [data-word]").first()).toHaveCSS("filter", "blur(0px)");
  await expect(page.locator(".hero [data-word]").first()).toHaveCSS("opacity", "1");
});

test("keyboard focus brings offscreen marquee cards into view even late in the loop", async ({ page, isMobile }) => {
  test.skip(isMobile);
  test.setTimeout(120000);
  await page.clock.install();
  await page.goto("/");
  await page.locator("#projects").scrollIntoViewIfNeeded();
  await page.mouse.move(1, 1);
  await page.clock.runFor(60000);
  const card = page.locator('.marquee-group:not([aria-hidden])').first().locator("a").first();
  await card.focus();
  await page.clock.runFor(350);
  await expect.poll(async () => (await card.boundingBox())?.x).toBeGreaterThanOrEqual(0);
  const reverseCard = page.locator('.marquee-window-reverse .marquee-group:not([aria-hidden])').first().locator("a").first();
  await reverseCard.focus();
  await page.clock.runFor(350);
  await expect.poll(async () => (await reverseCard.boundingBox())?.x).toBeGreaterThanOrEqual(0);
  await page.setViewportSize({ width: 820, height: 1000 });
  const lastCard = page.locator('.marquee-group:not([aria-hidden])').first().locator("a").last();
  await lastCard.focus();
  await page.clock.runFor(350);
  await expect.poll(async () => { const box = await lastCard.boundingBox(); return box ? box.x + box.width : 10000; }).toBeLessThanOrEqual(820);
});

test("responsive layouts fit narrow phones and intermediate screens", async ({ page, isMobile }) => {
  test.skip(isMobile);
  for (const width of [320, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/", "/projects"]) {
      await page.goto(route);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
  }
});

test("project enquiry dialog validates, prepares a complete email brief, and restores focus", async ({ page, isMobile }) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Discuss your project", exact: true }).first();
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
  if (isMobile) {
    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("button", { name: "Let’s talk" }).click();
    await expect(dialog).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
    await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
  }
});

test("marquee loop seams preserve visual phase in both directions", async ({ page, isMobile }) => {
  test.skip(isMobile);
  test.setTimeout(120000);
  await page.clock.install();
  await page.goto("/");
  await page.mouse.move(1, 1);
  await page.clock.runFor(500);
  await page.evaluate(() => {
    const tracks = Array.from(document.querySelectorAll<HTMLElement>(".marquee-track"));
    const width = tracks[0].querySelector(".marquee-group")!.getBoundingClientRect().width;
    const result = { seams: [0, 0], backwards: [0, 0], maxStep: [0, 0], frames: 0 };
    (window as Window & { loopResult?: typeof result }).loopResult = result;
    let previous = tracks.map(element => new DOMMatrixReadOnly(getComputedStyle(element).transform).m41);
    const tick = () => {
      const next = tracks.map(element => new DOMMatrixReadOnly(getComputedStyle(element).transform).m41);
      for (let i = 0; i < next.length; i++) {
        let delta = next[i] - previous[i];
        if (Math.abs(delta) > width / 2) result.seams[i]++;
        delta -= Math.round(delta / width) * width;
        if (delta * (i === 0 ? -1 : 1) < -0.025) result.backwards[i]++;
        result.maxStep[i] = Math.max(result.maxStep[i], Math.abs(delta));
      }
      previous = next;
      result.frames++;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
  await page.clock.runFor(90000);
  const result = await page.evaluate(() => (window as Window & { loopResult?: { seams: number[]; backwards: number[]; maxStep: number[]; frames: number } }).loopResult!);
  expect(result.frames).toBeGreaterThan(3000);
  expect(result.seams.every(value => value > 0)).toBe(true);
  expect(result.backwards).toEqual([0, 0]);
  expect(result.maxStep.every(value => value < 0.9)).toBe(true);
});

test("editorial rows retain alignment and dark footer stays readable and interactive", async ({ page, isMobile }) => {
  await page.goto("/");
  await expect(page.locator(".process-step")).toHaveCount(3);
  await expect(page.locator(".experience-row")).toHaveCount(3);
  await page.locator(".process-step").first().scrollIntoViewIfNeeded();
  await expect(page.locator(".process-step [data-editorial-cell]").first()).toHaveCSS("opacity", "1");
  const layout = await page.locator(".process-step").first().evaluate(element => ({
    columns: getComputedStyle(element).gridTemplateColumns.split(" ").length,
    height: element.getBoundingClientRect().height,
  }));
  expect(layout.columns).toBe(isMobile ? 2 : 3);
  if (!isMobile) expect(layout.height).toBeGreaterThanOrEqual(136);
  await expect(page.locator(".editorial-about")).toHaveCSS("background-color", "rgb(244, 244, 244)");
  const footer = page.locator("#contact");
  await footer.scrollIntoViewIfNeeded();
  await expect(footer).toHaveCSS("background-color", "rgb(18, 18, 18)");
  const contrast = await footer.evaluate(root => {
    const rgb = (value: string) => value.match(/[\d.]+/g)!.slice(0, 3).map(Number);
    const luminance = (value: number[]) => value.reduce((sum, channel, i) => {
      const s = channel / 255;
      return sum + (s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4) * [0.2126, 0.7152, 0.0722][i];
    }, 0);
    const ratio = (a: number[], b: number[]) => { const l = [luminance(a), luminance(b)].sort((x, y) => y - x); return (l[0] + 0.05) / (l[1] + 0.05); };
    const background = rgb(getComputedStyle(root).backgroundColor);
    const text = Array.from(root.querySelectorAll("h2,h3,p,li,a")).map(element => ratio(rgb(getComputedStyle(element).color), background));
    const button = root.querySelector("button")!;
    return { text: Math.min(...text), button: ratio(rgb(getComputedStyle(button).color), rgb(getComputedStyle(button).backgroundColor)) };
  });
  expect(contrast.text).toBeGreaterThanOrEqual(4.5);
  expect(contrast.button).toBeGreaterThanOrEqual(4.5);
  await footer.getByRole("button", { name: "Discuss your project" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(footer.getByRole("button", { name: "Discuss your project" })).toBeFocused();
});
