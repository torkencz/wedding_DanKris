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
  const [h, setH] = useState(280);

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
      const nextH = Math.round(Math.max(200, Math.min(320, rect.width * 0.3)));
      setH(nextH);
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const loopSeconds = useMemo(() => {
    switch (speed) {
      case "slow":
        return 10;
      case "fast":
        return 6;
      default:
        return 8;
    }
  }, [speed]);

  // path positions derived from container width
  const startX = Math.round(-0.25 * w);
  const endX = Math.round(1.15 * w);

  // Keep dog ahead by ~25% width
  const gap = Math.round(0.28 * w);

  // Character baseline - position from bottom
  const bottomOffset = Math.round(h * 0.12);

  // GIF sizes - responsive
  const gifSize = Math.min(180, Math.max(100, w * 0.18));

  // If reduced motion: show a static "scene" only
  if (prefersReducedMotion) {
    return (
      <section className={className}>
        <div
          ref={wrapRef}
          className="relative mx-auto w-full overflow-hidden rounded-2xl bg-white"
          style={{ height: h }}
          aria-label="A cute illustration of a red panda and a dog."
        >
          {/* Ground line */}
          <div 
            className="absolute left-0 right-0 bg-charcoal-200/30"
            style={{ bottom: bottomOffset, height: 2 }}
          />
          
          {/* Static scene */}
          <div className="absolute inset-0 flex items-end justify-center pb-8 gap-8">
            <img 
              src="/red-panda.gif" 
              alt="Red panda" 
              style={{ width: gifSize, height: 'auto' }}
              className="object-contain"
            />
            <img 
              src="/dog-running.gif" 
              alt="Dog" 
              style={{ width: gifSize, height: 'auto' }}
              className="object-contain"
            />
          </div>
          
          {/* Tiny heart */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-3xl opacity-60">
            💕
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-charcoal-500 font-accent italic">{caption}</p>
      </section>
    );
  }

  // If not in view: render the container but don't animate (saves CPU)
  const shouldAnimate = isInView;

  // Movement keyframes
  const dogX = shouldAnimate ? [startX, endX] : [startX];
  const pandaX = shouldAnimate ? [startX - gap, endX - gap] : [startX - gap];

  // Slight bounce for more playful movement
  const bounceY = shouldAnimate ? [0, -8, 0, -5, 0, -8, 0] : [0];
  const bounceTransition = shouldAnimate
    ? { duration: 0.8, repeat: Infinity, ease: "easeInOut" as const }
    : { duration: 0 };

  return (
    <section className={className}>
      <div
        ref={wrapRef}
        className="relative mx-auto w-full overflow-hidden rounded-2xl bg-white"
        style={{ height: h }}
        aria-label="A playful animation of a red panda chasing a dog."
      >
        {/* Ground line */}
        <div 
          className="absolute left-0 right-0 bg-charcoal-300/20"
          style={{ bottom: bottomOffset, height: 2 }}
        />

        {/* Floating hearts that appear occasionally */}
        <motion.div
          className="absolute text-2xl"
          style={{ top: '20%', left: '50%' }}
          animate={shouldAnimate ? { 
            opacity: [0, 0.6, 0.6, 0],
            y: [0, -20, -20, -40],
            scale: [0.5, 1, 1, 0.8]
          } : {}}
          transition={{
            duration: loopSeconds,
            repeat: Infinity,
            times: [0, 0.3, 0.7, 1],
            ease: "easeOut"
          }}
        >
          💕
        </motion.div>

        {/* Dog - running ahead */}
        <motion.div
          className="absolute"
          style={{ 
            bottom: bottomOffset,
          }}
          animate={{ x: dogX }}
          transition={{
            duration: loopSeconds,
            repeat: shouldAnimate ? Infinity : 0,
            ease: "linear",
          }}
        >
          <motion.div 
            animate={{ y: bounceY }} 
            transition={bounceTransition}
          >
            <img 
              src="/dog-running.gif" 
              alt="Running dog" 
              style={{ 
                width: gifSize, 
                height: 'auto',
                transform: 'scaleX(-1)' // Flipped on X axis
              }}
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Red Panda - chasing */}
        <motion.div
          className="absolute"
          style={{ 
            bottom: bottomOffset,
          }}
          animate={{ x: pandaX }}
          transition={{
            duration: loopSeconds,
            repeat: shouldAnimate ? Infinity : 0,
            ease: "linear",
          }}
        >
          <motion.div 
            animate={{ y: bounceY }} 
            transition={{ ...bounceTransition, delay: 0.1 }}
          >
            <img 
              src="/red-panda.gif" 
              alt="Running red panda" 
              style={{ 
                width: gifSize * 1.1, // Slightly larger
                height: 'auto',
              }}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      <p className="mt-4 text-center text-sm text-charcoal-500 font-accent italic">{caption}</p>
    </section>
  );
}
