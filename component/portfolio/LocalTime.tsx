"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Jakarta" });

export default function LocalTime({ className = "mono" }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const update = () => setTime(formatter.format(new Date()));
    update();
    const timer = window.setInterval(update, 15_000);
    return () => window.clearInterval(timer);
  }, []);
  return <p className={className}>
    Jakarta, ID · GMT+7{time && <> · <time aria-label={`Local time in Jakarta: ${time}`}>{time}</time></>}
  </p>;
}
