import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const TitleBanner = ({ children, className }: TypographyProps) => {
  return (
    <h1
      className={`text-3xl md:text-5xl lg:text-[53px] font-serif leading-tight lg:tracking-[1] ${className}`}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, className }: TypographyProps) => {
  return (
    <h2 className={`lg:text-3xl font-semibold text-[27px] ${className}`}>
      {children}
    </h2>
  );
};

export const H3 = ({ children, className }: TypographyProps) => {
  return (
    <h3 className={`text-[18px] lg:text-[20px] font-bold ${className}`}>
      {children}
    </h3>
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

export const P2 = ({ children, className }: TypographyProps) => {
  return (
    <p className={`text-[14px] leading-relaxed ${className}`}>{children}</p>
  );
};

export const P3 = ({ children, className }: TypographyProps) => {
  return (
    <p className={`lg:text-[18px] text-[16px] leading-relaxed ${className}`}>
      {children}
    </p>
  );
};
