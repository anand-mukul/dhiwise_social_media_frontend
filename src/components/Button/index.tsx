import React from "react";

const shapes = { round: "rounded-[12px]" } as const;
const variants = {
  outline: {
    white_A700_33: "border-2 border-solid border-white-A700_33",
    gray_500_6c: "border-2 border-gray-500_6c border-solid text-gray-900",
    gray_500_33: "border-2 border-gray-500_33 border-solid text-gray-900",
  },
  fill: {
    white_A700: "bg-white-A700",
    gray_100: "bg-gray-100 text-gray-500",
    white_A700_66: "bg-white-A700_66",
    green_400: "bg-green-400 text-white-A700",
    light_blue_200: "bg-light_blue-200 text-white-A700",
    gray_500_48: "bg-gray-500_48 text-gray-500",
    gray_900: "bg-gray-900 text-white-A700",
    white_A700_33: "bg-white-A700_33 text-white-A700",
  },
} as const;
const sizes = {
  xs: "py-px",
  sm: "p-1",
  md: "pr-[5px] py-[5px]",
  lg: "pr-2 py-2",
  xl: "p-[9px]",
  "2xl": "p-3",
  "3xl": "p-4",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
