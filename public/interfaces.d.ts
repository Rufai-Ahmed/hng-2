import { ReactNode } from "react";

export interface iNav {
  name?: string;
  link?: string;
}

export interface iCard {
  name?: string;
  img?: string;
  stars?: number;
  raters?: number;
  price?: number;
  colour?: string;
  oldPrice?: number;
}

export interface iInput {
  name?: string;
  placeholder?: string;
  icon?: ReactNode;
}

export interface iPayment {
  name?: string;
  active?: boolean;
}
