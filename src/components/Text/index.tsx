import React from "react";

const sizeClasses = {
  txtSFProDisplayMedium14: "font-medium font-sfprodisplay",
  txtInterBold14WhiteA700: "font-bold font-inter",
  txtInterBold14: "font-bold font-inter",
  txtInterRegular12WhiteA700: "font-inter font-normal",
  txtInterBold16: "font-bold font-inter",
  txtSFProDisplayRegular12: "font-normal font-sfprodisplay",
  txtInterMedium14Gray500: "font-inter font-medium",
  txtInterBold22: "font-bold font-inter",
  txtInterBold22Gray900: "font-bold font-inter",
  txtInterMedium14: "font-inter font-medium",
  txtInterBold12: "font-bold font-inter",
  txtInterBold30Gray500: "font-bold font-inter",
  txtSFProDisplayBold22: "font-bold font-sfprodisplay",
  txtInterBold30: "font-bold font-inter",
  txtInterMedium14WhiteA700: "font-inter font-medium",
  txtInterRegular14WhiteA700: "font-inter font-normal",
  txtSFProDisplayBold30: "font-bold font-sfprodisplay",
  txtInterBold14Gray500: "font-bold font-inter",
  txtInterRegular12: "font-inter font-normal",
  txtSFProDisplayBold1032: "font-bold font-sfprodisplay",
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
