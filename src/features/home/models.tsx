import { ReactNode } from "react";

export type TokenomicProps = {
  title: string;
  bg: string;
};

export type TaxProps = {
  title: string;
  value: string;
  config?: [number, number];
};

export type SlideProps = {
  children: ReactNode;
  className?: string;
  config?: {
    delay?: number;
    duration?: number;
    to?: number;
    from?: number;
  };
};

export type RevealProps = {
  children: React.ReactNode;
  width?: string;
  className?: string;
  delay?: number;
  from?: number;
  to?: number;
};
