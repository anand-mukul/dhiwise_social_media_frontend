import React from "react";

const sizeClasses = {
  txtSFProDisplayMedium14: "font-medium font-sfprodisplay",
  txtInterBold14WhiteA700: "font-bold font-inter",
  txtInterBold14: "font-bold font-inter",
  txtInterRegular12WhiteA700: "font-inter font-normal",
  txtInterMedium14Gray500: "font-inter font-medium",
  txtInterBold22: "font-bold font-inter",
  txtInterMedium14: "font-inter font-medium",
  txtInterBold12: "font-bold font-inter",
  txtInterBold30: "font-bold font-inter",
  txtInterBold22WhiteA700: "font-bold font-inter",
  txtInterRegular14WhiteA700: "font-inter font-normal",
  txtInterMedium14Gray900: "font-inter font-medium",
  txtInterBold14Gray500: "font-bold font-inter",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterBold30WhiteA700: "font-bold font-inter",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
