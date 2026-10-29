import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ target, duration = 1600, className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState('0');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const parsed = parseFloat(target.replace(/[^0-9.]/g, ''));
    const prefix = target.match(/^[^0-9]*/)?.[0] ?? '';
    const suffix = target.match(/[^0-9]*$/)?.[0] ?? '';
    const hasDecimal = target.includes('.');

    let startTime: number | null = null;

    const animate = (ts: number) => {
      if (startTime === null) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = parsed * eased;

      setDisplay(
        hasDecimal
          ? `${prefix}${current.toFixed(1)}${suffix}`
          : `${prefix}${Math.round(current).toLocaleString()}${suffix}`,
      );

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return (
    <span ref={ref} className={`counter ${className}`}>
      {display}
    </span>
  );
}
