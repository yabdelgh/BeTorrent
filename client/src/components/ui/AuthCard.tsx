import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';

interface AuthCardPops extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const AuthCard = ({ children, className, ...rest }: AuthCardPops) => {
  return (
    <div
      {...rest}
      className={clsx(
        'flex flex-col gap-12 rounded-lg px-6 py-8 md:border md:border-primary-50 md:bg-glass-overlay md:px-8 md:py-10 md:backdrop-blur-xl',
        className,
      )}
    >
      {children}
    </div>
  );
};
