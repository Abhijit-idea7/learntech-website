import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface MagneticButtonProps {
  to: string;
  children: ReactNode;
  className: string;
}

// Magnetic hover removed in the design tightening pass; kept as a plain link.
export default function MagneticButton({ to, children, className }: MagneticButtonProps) {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
