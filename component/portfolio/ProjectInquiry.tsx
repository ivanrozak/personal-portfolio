"use client";

import { createContext, useContext, useEffect, useId, useRef, useState } from "react";
import { useAnimate, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check, ChevronDown, Copy, X } from "lucide-react";

function InquirySelect({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <div className="inquiry-select"><select {...props}>{children}</select><ChevronDown size={18} aria-hidden="true" /></div>;
}

const InquiryContext = createContext<(() => void) | null>(null);

export function InquiryButton({ children, className = "", onOpen }: { children: React.ReactNode; className?: string; onOpen?: () => void }) {
  const open = useContext(InquiryContext);
  return <button type="button" className={className} aria-haspopup="dialog" onClick={event => { event.currentTarget.focus({ preventScroll: true }); onOpen?.(); open?.(); }}>{children}</button>;
}

export function ProjectInquiryProvider({ children, onOpenChange }: { children: React.ReactNode; onOpenChange: (open: boolean) => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<{ href: string; body: string } | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const closing = useRef(false);
  const opener = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    onOpenChange(true);
    const controls = animate(scope.current, { opacity: [0, 1], y: [reduced ? 0 : 20, 0], scale: [reduced ? 1 : 0.98, 1] }, { duration: reduced ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] });
    return () => { controls.stop(); document.documentElement.style.overflow = previous; onOpenChange(false); };
  }, [open, animate, scope, reduced, onOpenChange]);

  const show = () => {
    if (dialog.current?.open) return;
    closing.current = false;
    opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    if (opener.current?.closest("#mobile-navigation")) opener.current = document.querySelector<HTMLButtonElement>(".mobile-menu-button");
    dialog.current?.showModal();
    setOpen(true);
  };
  const close = async () => {
    if (closing.current) return;
    closing.current = true;
    await animate(scope.current, { opacity: 0, y: reduced ? 0 : 12, scale: reduced ? 1 : 0.985 }, { duration: reduced ? 0 : 0.18 });
    dialog.current?.close();
  };

  return <InquiryContext.Provider value={show}>
    {children}
    <dialog ref={dialog} className="inquiry-dialog" aria-labelledby={`${id}-title`} aria-describedby={`${id}-description`} onClose={() => {
      setOpen(false);
      closing.current = false;
      if (opener.current?.isConnected) opener.current.focus({ preventScroll: true });
      else document.querySelector<HTMLButtonElement>(".mobile-menu-button")?.focus({ preventScroll: true });
    }} onCancel={event => { event.preventDefault(); void close(); }} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) void close();
    }}>
      <div ref={scope} className="inquiry-content" data-lenis-prevent>
        <div className="inquiry-heading"><h2 id={`${id}-title`}>Let’s build something.</h2><button type="button" className="inquiry-close" aria-label="Close project enquiry" onClick={() => void close()}><X size={22} /></button></div>
        <p id={`${id}-description`} className="inquiry-introduction">Tell me a little about your project. A rough idea is a good place to start.</p>
        <form className="inquiry-form" onChange={() => { setDraft(null); setCopyState("idle"); }} onSubmit={event => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          const field = (name: string) => String(data.get(name) ?? "").trim();
          const body = `Hi Ivan,\n\n${field("description")}\n\nProject type: ${field("type")}\nBudget: ${field("budget") || "Not decided yet"}\nTimeline: ${field("timeline") || "Flexible"}\n\nFrom: ${field("name")}\nReply to: ${field("email")}`;
          const href = `mailto:ivanrozack@gmail.com?subject=${encodeURIComponent(`Project enquiry — ${field("type")} — ${field("name")}`)}&body=${encodeURIComponent(body)}`;
          setDraft({ href, body });
          window.location.assign(href);
        }}>
          <div className="inquiry-field-row"><label htmlFor={`${id}-name`}>Your name<input id={`${id}-name`} name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100} /></label><label htmlFor={`${id}-email`}>Email address<input id={`${id}-email`} type="email" name="email" autoComplete="email" placeholder="alex@company.com" required maxLength={254} /></label></div>
          <label htmlFor={`${id}-type`}>What do you need?<InquirySelect id={`${id}-type`} name="type" defaultValue="" required><option value="" disabled>Select a project type</option><option>A website or landing page</option><option>A web app or business tool</option><option>Real-time features or integrations</option><option>Help with an existing product</option><option>Let’s figure it out together</option></InquirySelect></label>
          <label htmlFor={`${id}-description-input`}>A little about the project<textarea id={`${id}-description-input`} name="description" rows={3} required minLength={20} maxLength={4000} placeholder="What are you building, who is it for, and what would you like to improve?" /></label>
          <div className="inquiry-field-row"><label htmlFor={`${id}-budget`}>Budget range <span>(optional)</span><input id={`${id}-budget`} name="budget" maxLength={100} placeholder="A range, if you have one" /></label><label htmlFor={`${id}-timeline`}>Timeline <span>(optional)</span><InquirySelect id={`${id}-timeline`} name="timeline" defaultValue=""><option value="">Flexible / not sure yet</option><option>Within a month</option><option>In 1–3 months</option><option>In 3+ months</option></InquirySelect></label></div>
          <div className="inquiry-submit"><p>You’ll review and send this in your email app.</p><button type="submit" className="button">Continue in email<ArrowUpRight size={19} /></button></div>
          {draft && <div className="inquiry-draft" role="status"><p>Email app didn’t open? <a href={draft.href}>Open the draft again</a> or copy your brief.</p><button type="button" className="text-link" onClick={async () => { try { await navigator.clipboard.writeText(draft.body); setCopyState("copied"); } catch { setCopyState("failed"); } }}>{copyState === "copied" ? <Check size={16} /> : <Copy size={16} />}{copyState === "copied" ? "Brief copied" : "Copy brief"}</button>{copyState === "failed" && <label>Copy the brief below<textarea readOnly value={draft.body} rows={5} onFocus={event => event.target.select()} /></label>}</div>}
        </form>
        <p className="inquiry-direct">Prefer a quick email? <a href="mailto:ivanrozack@gmail.com">ivanrozack@gmail.com</a></p>
      </div>
    </dialog>
  </InquiryContext.Provider>;
}
