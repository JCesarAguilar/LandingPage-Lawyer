import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const TitleBanner = ({ children, className }: TypographyProps) => {
  return (
    <h1
      className={`text-3xl md:text-5xl lg:text-[53px] font-serif leading-tight ${className}`}
    >
      {children}
    </h1>
  );
};

export const P1 = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={`bg-linear-to-r from-gray-medium to-gray-soft bg-clip-text text-transparent drop-shadow-lg text-[14px] lg:text-[18px] leading-relaxed ${className}`}
    >
      {children}
    </p>
  );
};
