import React from "react";

const shapes = { round: "rounded-[12px]" } as const;
const variants = {
  fill: {
    white_A700_99: "bg-white-A700_99",
    white_A700: "bg-white-A700",
    indigo_600: "bg-indigo-600 text-white-A700",
    gray_900: "bg-gray-900 text-white-A700",
    light_blue_200: "bg-light_blue-200 text-white-A700",
    gray_100: "bg-gray-100",
    green_400: "bg-green-400 text-white-A700",
    white_A700_33: "bg-white-A700_33",
    indigo_A200: "bg-indigo-A200 text-white-A700",
  },
  outline: {
    white_A700_33: "border-2 border-solid border-white-A700_33",
    gray_500_66: "border-2 border-gray-500_66 border-solid text-gray-900",
  },
} as const;
const sizes = {
  xs: "py-[3px]",
  sm: "p-[7px]",
  md: "p-2.5",
  lg: "p-[15px]",
  xl: "sm:pr-5 pr-[22px] py-[22px]",
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
