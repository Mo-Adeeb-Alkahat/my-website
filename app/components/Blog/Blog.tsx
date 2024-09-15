import React from "react";
import Image from "next/image";

const Blog: React.FC<{
  id: number;
  title: string;
  image: string;
  desc: string;
  link: string;
}> = (props) => {
  const { id, title, image, desc, link } = props;
  return (
    <li className=" flex flex-col items-center  gap-4  bg-teal-950 rounded-md  min-h-96  w-full pt-4   transition ease-in delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-teal-800 duration-300 ">
      <h3 className="text-2xl">{title}</h3>

      <Image
        className=" w-full h-32  "
        src={image}
        alt="Picture of the author"
        width={200}
        height={50}
      />
      <p className="my-4 p-3 text-center text-lg">{desc}</p>
      <div className="flex justify-center gap-8 mb-3">
        <a
          className="bg-green-950 w-24 text-center rounded-md"
          href={link}
          target="_blank"
        >
          {" "}
          visit{" "}
        </a>
      </div>
    </li>
  );
};

export default Blog;
