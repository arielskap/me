import { StaticImageData } from "next/image";

export interface IWork {
  title: string;
  href: string;
  img: StaticImageData;
  alt: string;
  description: string;
  tags: Array<string>;
}
