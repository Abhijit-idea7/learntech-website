import { ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

// Tilt effect removed in the design tightening pass; kept as a plain wrapper.
export default function TiltCard({ children, className = '' }: TiltCardProps) {
  return <div className={className}>{children}</div>;
}
