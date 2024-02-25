import React from "react";

const sizeClasses = {
  txtSFProDisplayBold16WhiteA700: "font-bold font-sfprodisplay",
  txtInterBold12Gray900: "font-bold font-inter",
  txtInterBold14: "font-bold font-inter",
  txtSFProDisplayRegular14: "font-normal font-sfprodisplay",
  txtInterBold16: "font-bold font-inter",
  txtInterMedium14Gray500: "font-inter font-medium",
  txtInterRegular14WhiteA700cc: "font-inter font-normal",
  txtInterBold22: "font-bold font-inter",
  txtInterMedium14: "font-inter font-medium",
  txtInterBold12: "font-bold font-inter",
  txtSFProDisplayBold16: "font-bold font-sfprodisplay",
  txtInterBold30: "font-bold font-inter",
  txtInterBold22WhiteA700: "font-bold font-inter",
  txtInterBold16WhiteA700: "font-bold font-inter",
  txtInterBold16Gray500: "font-bold font-inter",
  txtInterMedium14Gray900: "font-inter font-medium",
  txtInterRegular12: "font-inter font-normal",
  txtInterBold12WhiteA700: "font-bold font-inter",
  txtInterRegular14: "font-inter font-normal",
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
