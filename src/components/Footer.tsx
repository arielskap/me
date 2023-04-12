import SvgEmail from "./svg/SvgEmail";
import SvgGithub from "./svg/SvgGithub";
import SvgLinkedin from "./svg/SvgLinkedin";
import SvgPhone from "./svg/SvgPhone";
import { LanguageIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const { locale } = useRouter();
  return (
    <footer className="hidden md:absolute md:bottom-0 md:left-0 md:z-20 md:block md:w-full md:border-t-2 md:border-sky-500 md:bg-black md:bg-opacity-50 md:py-4">
      <div className="container relative mx-auto">
        <div className="flex items-center justify-center space-x-12">
          <a
            aria-label="Email"
            rel="noopener noreferrer"
            href="mailto:arielvillagu@hotmail.com"
            target="_blank"
          >
            <SvgEmail className="h-16 rounded border border-transparent fill-current object-contain p-1 text-white hover:border-sky-500 hover:bg-black hover:bg-opacity-90" />
          </a>
          <a
            aria-label="Telphone"
            rel="noopener noreferrer"
            href="tel:+5215628253550"
            target="_blank"
          >
            <SvgPhone className="h-16 rounded border border-transparent fill-current object-contain p-1 text-white hover:border-sky-500 hover:bg-black hover:bg-opacity-90" />
          </a>
          <a
            aria-label="Linkedin"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ariel-villarreal"
            target="_blank"
          >
            <SvgLinkedin className="h-16 rounded border border-transparent fill-current object-contain p-1 text-white hover:border-sky-500 hover:bg-black hover:bg-opacity-90" />
          </a>
          <a
            aria-label="Github"
            rel="noopener noreferrer"
            href="https://github.com/arielskap"
            target="_blank"
          >
            <SvgGithub className="h-16 rounded border border-transparent fill-current object-contain p-1 text-white hover:border-sky-500 hover:bg-black hover:bg-opacity-90" />
          </a>
        </div>
        <div className="absolute inset-y-0 right-4 hidden items-center md:flex">
          <Link
            href="/old"
            locale={locale === "es" ? "en" : "es"}
            className="flex items-center rounded-lg border border-pink-500 px-2 py-1 text-white"
          >
            <LanguageIcon className="mr-2 h-5 w-5" />
            <span className="sr-only">Change to</span>{" "}
            {locale === "es" ? "ES" : "EN"}
          </Link>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 768px) and (max-height: 800px) {
          footer {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
