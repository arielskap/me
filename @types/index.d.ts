import { StaticImageData } from "next/image";
import { Role } from "../src/lib/enums";

interface IWork {
  title: string;
  href: string;
  img: StaticImageData;
  alt: string;
  description: string;
  tags: Array<string>;
}

interface IMessage {
  role: Role;
  content: string;
}

interface ResponseData {
  success: boolean;
  message: string | undefined;
}

declare global {
  interface Window {
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}
