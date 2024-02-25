import React from "react";

const shapes = { round: "rounded" } as const;
const variants = {
  outline: {
    gray_500_99: "border-2 border-gray-500_99 border-solid text-white-A700",
    gray_500_6c: "border-2 border-gray-500_6c border-solid text-gray-900",
    white_A700_33: "border-2 border-solid border-white-A700_33",
  },
  fill: {
    gray_900_33: "bg-gray-900_33 text-white-A700",
    gray_500_36: "bg-gray-500_36 text-gray-900",
    gray_100_6c: "bg-gray-100_6c text-gray-900",
    gray_900_6c: "bg-gray-900_6c text-white-A700",
    white_A700: "bg-white-A700 text-gray-900",
    light_blue_200_33: "bg-light_blue-200_33",
    gray_900: "bg-gray-900 text-white-A700",
    light_blue_200: "bg-light_blue-200 text-white-A700",
    gray_100_90: "bg-gray-100_90 text-gray-500",
    gray_100: "bg-gray-100 text-gray-500",
    green_400: "bg-green-400 text-white-A700",
    indigo_A200: "bg-indigo-A200 text-white-A700",
    white_A700_33: "bg-white-A700_33",
    red_A200: "bg-red-A200 text-white-A700",
  },
} as const;
const sizes = {
  xs: "p-[3px]",
  sm: "pl-[5px] py-[5px]",
  md: "pl-2 pr-[5px] py-2",
  lg: "p-2.5",
  xl: "p-[15px]",
  "2xl": "p-[22px] sm:px-5",
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
