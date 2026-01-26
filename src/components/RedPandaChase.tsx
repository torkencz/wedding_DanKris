import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Speed = "slow" | "medium" | "fast";

export default function RedPandaChase({
  speed = "medium",
  className = "",
  caption = "A short animated interlude because… us.",
}: {
  speed?: Speed;
  className?: string;
  caption?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const [isInView, setIsInView] = useState(true);
  const [w, setW] = useState(900);
  const [h, setH] = useState(240);

  // --- visibility: pause when offscreen
  useEffect(() => {
    if (!wrapRef.current) return;
    const el = wrapRef.current;

    const io = new IntersectionObserver(
      (entries) => setIsInView(entries[0]?.isIntersecting ?? true),
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // --- responsive sizing
  useEffect(() => {
    if (!wrapRef.current) return;
    const el = wrapRef.current;

    const ro = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (!rect) return;
      setW(Math.max(320, Math.floor(rect.width)));
      // keep a pleasant height; clamp for mobile/desktop
      const nextH = Math.round(Math.max(180, Math.min(280, rect.width * 0.26)));
      setH(nextH);
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const loopSeconds = useMemo(() => {
    switch (speed) {
      case "slow":
        return 9.5;
      case "fast":
        return 5.8;
      default:
        return 7.5;
    }
  }, [speed]);

  // path positions derived from container width
  const startX = Math.round(-0.2 * w);
  const endX = Math.round(1.2 * w);

  // Keep dog ahead by ~20% width
  const gap = Math.round(0.22 * w);

  // Character baseline
  const baselineY = Math.round(h * 0.58);

  // If reduced motion: show a static "scene" only
  if (prefersReducedMotion) {
    return (
      <section className={className}>
        <div
          ref={wrapRef}
          className="relative mx-auto w-full overflow-hidden rounded-2xl bg-cream-100"
          style={{ height: h }}
          aria-label="A cute illustration of a red panda and a dog."
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width={Math.min(w, 680)} height={h} viewBox="0 0 680 260" role="img" aria-hidden="true">
              {/* ground */}
              <line x1="40" y1="185" x2="640" y2="185" stroke="rgba(0,0,0,0.12)" strokeWidth="2" />
              {/* dog */}
              <g transform="translate(410,130)">
                <DogSVG />
              </g>
              {/* panda */}
              <g transform="translate(250,132)">
                <RedPandaSVG />
              </g>
              {/* tiny heart */}
              <path
                d="M338 78c7-12 24-12 31 0 7 12-4 24-16 34-12-10-23-22-15-34z"
                fill="rgba(239,68,68,0.55)"
              />
            </svg>
          </div>
        </div>
        <p className="mt-3 text-center text-sm text-charcoal-500 font-accent italic">{caption}</p>
      </section>
    );
  }

  // If not in view: render the container but don't animate (saves CPU)
  const shouldAnimate = isInView;

  // Movement: dog accelerates near the end; panda hop/stumble near end
  // We do this with keyframes on x, and separate keyframes on y/rotate for panda.
  const dogX = shouldAnimate ? [startX, endX - Math.round(0.18 * w), endX] : [startX];
  const dogTimes = shouldAnimate ? [0, 0.78, 1] : [0];

  const pandaX = shouldAnimate ? [startX - gap, endX - gap - Math.round(0.18 * w), endX - gap] : [startX - gap];
  const pandaTimes = dogTimes;

  const pandaHopY = shouldAnimate
    ? [baselineY, baselineY, baselineY - Math.round(h * 0.08), baselineY]
    : [baselineY];
  const pandaHopTimes = shouldAnimate ? [0, 0.8, 0.85, 0.92] : [0];

  const pandaRot = shouldAnimate ? [0, 0, -6, 0] : [0];
  const pandaRotTimes = pandaHopTimes;

  // run-cycle: subtle bob
  const bobY = shouldAnimate ? [0, -4, 0, -3, 0] : [0];
  const bobTransition = shouldAnimate
    ? { duration: 0.6, repeat: Infinity, ease: "easeInOut" as const }
    : { duration: 0 };

  // leg swing cycle
  const legRot = shouldAnimate ? [18, -18, 18] : [0];
  const legTransition = shouldAnimate
    ? { duration: 0.35, repeat: Infinity, ease: "easeInOut" as const }
    : { duration: 0 };

  // tail wag
  const tailRot = shouldAnimate ? [10, -10, 10] : [0];
  const tailTransition = shouldAnimate
    ? { duration: 0.9, repeat: Infinity, ease: "easeInOut" as const }
    : { duration: 0 };

  return (
    <section className={className}>
      <div
        ref={wrapRef}
        className="relative mx-auto w-full overflow-hidden rounded-2xl bg-cream-100"
        style={{ height: h }}
        aria-label="A playful animation of a red panda chasing a dog."
      >
        {/* ground line */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: baselineY + Math.round(h * 0.18),
            height: 2,
            background: "rgba(0,0,0,0.10)",
          }}
        />

        {/* dog */}
        <motion.div
          className="absolute"
          style={{ top: baselineY - 52 }}
          animate={{ x: dogX }}
          transition={{
            duration: loopSeconds,
            repeat: shouldAnimate ? Infinity : 0,
            times: dogTimes,
            ease: "easeInOut",
          }}
        >
          <motion.div animate={{ y: bobY }} transition={bobTransition}>
            <DogSVG legRot={legRot} legTransition={legTransition} tailRot={tailRot} tailTransition={tailTransition} />
          </motion.div>
        </motion.div>

        {/* panda */}
        <motion.div
          className="absolute"
          style={{ top: baselineY - 48 }}
          animate={{ x: pandaX, y: pandaHopY, rotate: pandaRot }}
          transition={{
            duration: loopSeconds,
            repeat: shouldAnimate ? Infinity : 0,
            times: pandaTimes,
            ease: "easeInOut",
            // y/rotate use their own times for hop
            y: { times: pandaHopTimes, ease: "easeInOut" },
            rotate: { times: pandaRotTimes, ease: "easeInOut" },
          }}
        >
          <motion.div animate={{ y: bobY }} transition={bobTransition}>
            <RedPandaSVG legRot={legRot} legTransition={legTransition} tailRot={tailRot} tailTransition={tailTransition} />
          </motion.div>
        </motion.div>
      </div>

      <p className="mt-3 text-center text-sm text-charcoal-500 font-accent italic">{caption}</p>
    </section>
  );
}

/** ---------- Simple inline SVGs (cute + lightweight, easy to replace later) ---------- */

interface AnimatedSVGProps {
  legRot?: number[] | number;
  legTransition?: object;
  tailRot?: number[] | number;
  tailTransition?: object;
}

function DogSVG({
  legRot = [0],
  legTransition,
  tailRot = [0],
  tailTransition,
}: AnimatedSVGProps) {
  return (
    <svg width="150" height="90" viewBox="0 0 150 90" role="img" aria-hidden="true">
      {/* shadow */}
      <ellipse cx="70" cy="78" rx="44" ry="9" fill="rgba(0,0,0,0.08)" />

      {/* tail */}
      <motion.g
        style={{ transformOrigin: "120px 46px" }}
        animate={{ rotate: tailRot }}
        transition={tailTransition}
      >
        <path d="M116 46c16-6 22 8 16 14-5 5-12 3-16-1" fill="#9CA3AF" />
      </motion.g>

      {/* body */}
      <path d="M34 54c0-16 18-28 44-28s42 12 42 28-16 22-42 22-44-6-44-22z" fill="#D1D5DB" />
      {/* head */}
      <circle cx="34" cy="48" r="16" fill="#D1D5DB" />
      {/* ear */}
      <path d="M26 34c2-7 9-9 12-2-5 2-9 3-12 2z" fill="#9CA3AF" />
      {/* muzzle */}
      <ellipse cx="24" cy="54" rx="10" ry="8" fill="#E5E7EB" />
      {/* nose */}
      <circle cx="18" cy="53" r="2.2" fill="#111827" />
      {/* eye */}
      <circle cx="36" cy="46" r="2.2" fill="#111827" />
      {/* tongue */}
      <path d="M18 58c3 6 9 6 10 0" stroke="#EF4444" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* legs */}
      <motion.g style={{ transformOrigin: "62px 62px" }} animate={{ rotate: legRot }} transition={legTransition}>
        <rect x="54" y="62" width="10" height="16" rx="4" fill="#9CA3AF" />
        <rect x="74" y="62" width="10" height="16" rx="4" fill="#9CA3AF" />
      </motion.g>
      <motion.g style={{ transformOrigin: "96px 62px" }} animate={{ rotate: legRot }} transition={legTransition}>
        <rect x="92" y="60" width="10" height="18" rx="4" fill="#9CA3AF" />
        <rect x="110" y="60" width="10" height="18" rx="4" fill="#9CA3AF" />
      </motion.g>
    </svg>
  );
}

function RedPandaSVG({
  legRot = [0],
  legTransition,
  tailRot = [0],
  tailTransition,
}: AnimatedSVGProps) {
  return (
    <svg width="160" height="95" viewBox="0 0 160 95" role="img" aria-hidden="true">
      {/* shadow */}
      <ellipse cx="74" cy="82" rx="46" ry="9" fill="rgba(0,0,0,0.08)" />

      {/* tail */}
      <motion.g
        style={{ transformOrigin: "126px 54px" }}
        animate={{ rotate: tailRot }}
        transition={tailTransition}
      >
        <path d="M110 56c16-14 34-6 32 10-2 12-18 16-30 6" fill="#F97316" />
        {/* rings */}
        <path d="M121 50c5 2 9 6 10 12" stroke="rgba(17,24,39,0.20)" strokeWidth="4" strokeLinecap="round" />
        <path d="M130 50c5 2 9 6 10 12" stroke="rgba(17,24,39,0.18)" strokeWidth="4" strokeLinecap="round" />
      </motion.g>

      {/* body */}
      <path d="M38 58c0-18 20-32 50-32s48 14 48 32-18 24-48 24-50-6-50-24z" fill="#FB923C" />
      {/* belly */}
      <path d="M54 64c4-10 18-16 34-16s28 6 32 16c-10 10-54 10-66 0z" fill="rgba(255,255,255,0.45)" />

      {/* head */}
      <circle cx="40" cy="48" r="17" fill="#FB923C" />
      {/* ears */}
      <path d="M30 35c3-10 14-11 16 0-7 1-12 1-16 0z" fill="rgba(17,24,39,0.25)" />
      <path d="M44 35c3-10 14-11 16 0-7 1-12 1-16 0z" fill="rgba(17,24,39,0.25)" />

      {/* face mask */}
      <ellipse cx="34" cy="52" rx="11" ry="9" fill="rgba(255,255,255,0.55)" />
      {/* eye */}
      <circle cx="45" cy="46" r="2.2" fill="#111827" />
      {/* nose */}
      <circle cx="28" cy="52" r="2.2" fill="#111827" />
      {/* smile */}
      <path d="M27 58c6 5 12 4 16-1" stroke="rgba(17,24,39,0.55)" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* legs */}
      <motion.g style={{ transformOrigin: "70px 66px" }} animate={{ rotate: legRot }} transition={legTransition}>
        <rect x="58" y="64" width="10" height="18" rx="4" fill="rgba(17,24,39,0.35)" />
        <rect x="78" y="64" width="10" height="18" rx="4" fill="rgba(17,24,39,0.35)" />
      </motion.g>
      <motion.g style={{ transformOrigin: "98px 66px" }} animate={{ rotate: legRot }} transition={legTransition}>
        <rect x="96" y="62" width="10" height="20" rx="4" fill="rgba(17,24,39,0.35)" />
        <rect x="114" y="62" width="10" height="20" rx="4" fill="rgba(17,24,39,0.35)" />
      </motion.g>
    </svg>
  );
}
