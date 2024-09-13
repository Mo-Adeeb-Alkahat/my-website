import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex gap-1 mt-2 mb-1 fixed bottom-0 right-[25%] md:right-[43%] ">
      <a href="https://github.com/Mo-Adeeb-Alkahat">
        <Image
          className="translate-y-[1.5px]"
          alt="github"
          src="/github.svg"
          width={8}
          height={8}
        ></Image>
      </a>
      <a href="https://www.linkedin.com/in/mo-adeeb-alkahat/">
        <Image
          className=""
          alt="LinkedIn"
          src="/linkedin.svg"
          width={10}
          height={10}
        ></Image>
      </a>
      <p className="text-[7px]">
        © 2025 Mohammed Adeeb Alkahat. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
