import Image from "next/image";
import SvgLinkedin from "./svg/SvgLinkedin";
import SvgPhone from "./svg/SvgPhone";
import colors from "tailwindcss/colors";
import SvgEmail from "./svg/SvgEmail";
import SvgGithub from "./svg/SvgGithub";
import meIMG from "../../public/me.jpg";
import { useTranslation } from "next-i18next";

const Contact = () => {
  const { t } = useTranslation("common");

  return (
    <section
      id="contact"
      className="flex h-screen items-center md:justify-center md:py-16 md:px-16"
    >
      <div className="contact-body mx-auto md:w-full md:max-w-xs md:rounded-md md:border md:border-sky-500 md:bg-primary md:bg-opacity-90 md:p-4 md:shadow-2xl">
        <h2 className="pb-4 text-center text-4xl md:hidden">
          {t("contact.title")}
        </h2>
        <div className="contact-body-social">
          <div className="contact-image-parent mx-auto pb-2 md:w-full md:pb-6">
            <div className="contact-image relative h-36 w-full md:h-52">
              <Image
                src={meIMG}
                alt="Ariel Villarreal mirando al horizonte"
                className="h-full w-full object-cover md:rounded-md"
                placeholder="blur"
              />
              <div
                id="img-border"
                className="absolute top-0 left-0 h-full w-full rounded"
              />
            </div>
          </div>
          <div className="space-y-3 md:space-y-4">
            <div>
              <a
                rel="noopener noreferrer"
                href="mailto:arielvillagu@hotmail.com"
                target="_blank"
              >
                <div className="flex items-center border border-sky-800 px-2 py-1 hover:border-sky-500 hover:bg-black hover:bg-opacity-90">
                  <SvgEmail className="w-10 fill-current object-contain text-sky-500" />
                  <span className="ml-2">arielvillagu@hotmail.com</span>
                </div>
              </a>
            </div>
            <div>
              <a
                rel="noopener noreferrer"
                href="tel:+5215628253550"
                target="_blank"
              >
                <div className="flex items-center border border-sky-800 px-2 py-1 hover:border-sky-500 hover:bg-black hover:bg-opacity-90">
                  <SvgPhone className="w-10 fill-current object-contain text-sky-500" />
                  <span className="ml-2">+5215628253550</span>
                </div>
              </a>
            </div>
            <div>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/ariel-villarreal"
                target="_blank"
              >
                <div className="flex items-center border border-sky-800 px-2 py-1 hover:border-sky-500 hover:bg-black hover:bg-opacity-90">
                  <SvgLinkedin className="w-10 fill-current object-contain text-sky-500" />
                  <span className="ml-2">ariel-villarreal</span>
                </div>
              </a>
            </div>
            <div>
              <a
                rel="noopener noreferrer"
                href="https://github.com/arielskap"
                target="_blank"
              >
                <div className="flex items-center border border-sky-800 px-2 py-1 hover:border-sky-500 hover:bg-black hover:bg-opacity-90">
                  <SvgGithub className="w-10 fill-current object-contain text-sky-500" />
                  <span className="ml-2">arielskap</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-2 md:pt-4">
          <div className="relative flex">
            <a
              rel="noopener"
              className="z-10 h-full w-full"
              href="/Ariel Villarreal Curriculum.pdf"
              target="blank"
            >
              <div className="rounded border border-sky-500 px-4 py-2 hover:border-sky-500 hover:bg-black hover:bg-opacity-90 md:border-sky-800">
                <span>Obtener CV</span>
              </div>
            </a>
            <div className="absolute right-1 top-1 h-full w-full rounded border-b border-l border-sky-500 md:border-sky-800" />
          </div>
        </div>
      </div>
      <style jsx>{`
        #img-border {
          border-right: 1px solid ${colors.sky[500]};
          border-bottom: 1px solid ${colors.sky[500]};
          border-left: 1px solid ${colors.pink[500]};
          border-top: 1px solid ${colors.pink[500]};
        }
        @media (min-width: 768px) {
          #img-border {
            border-style: none;
          }
        }
        @media (min-width: 768px) and (max-height: 800px) {
          .contact-body {
            max-width: 40rem;
          }
          .contact-body-social {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 1rem;
          }
          .contact-image-parent {
            padding-bottom: 0;
          }
          .contact-image {
            height: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
