import Image from "next/image";
import { IWork } from "../../@types";

const WorkTarget = ({ href, alt, title, description, img }: IWork) => {
  return (
    <a
      className="flex h-96 md:h-full"
      rel="noopener noreferrer"
      target="_blank"
      href={href}
    >
      <figure className="relative flex w-full items-center justify-center rounded border border-sky-500 bg-black bg-opacity-50 p-1">
        <Image
          className="h-full w-full rounded object-cover md:max-w-xs"
          src={img}
          alt={alt}
          placeholder="blur"
        />
        <div className="description-hidden-on-hover absolute top-0 left-0 z-20 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-90 px-8 transition-opacity duration-500 hover:opacity-0">
          <p className="rounded bg-black bg-opacity-90 px-2 text-center text-2xl text-blue-300">
            {title}
          </p>
          <p className="mt-2 rounded bg-black text-center transition-opacity duration-500">
            {description}
          </p>
        </div>
      </figure>
    </a>
  );
};

export default WorkTarget;
