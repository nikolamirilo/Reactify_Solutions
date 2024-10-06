import Link from "next/link";
import React from "react";

const CustomLink = ({
  href,
  title,
  style,
  icon,
}: {
  href: string;
  title: string;
  style?: object;
  icon?: any;
}) => {
  return (
    <Link
      href={href}
      style={style}
      className="ease-in-up bg-primaryColor flex w-fit min-w-[6rem] flex-row items-center justify-center gap-2 rounded-md py-3 px-6 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp"
    >
      {icon ? icon : null} {title}
    </Link>
  );
};

export default CustomLink;
