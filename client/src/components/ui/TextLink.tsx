import React from 'react';
import Link, { type LinkProps } from 'next/link';
import clsx from 'clsx';

interface TextLinkProps extends LinkProps {
  text?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
}

const TextLink: React.FC<TextLinkProps> = ({
  text,
  children,
  className,
  onClick,
  ...rest
}) => {
  return (
    <Link
      onClick={onClick}
      className={clsx(
        'font-raleway text-base font-bold text-white underline',
        className,
      )}
      {...rest}
    >
      {text || children}
    </Link>
  );
};

export default TextLink;
