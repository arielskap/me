import SvgGalaxy from "./svg/SvgGalaxy";
import { useTranslation } from "next-i18next";

interface Props {
  birthday: number;
}

const AboutMe = ({ birthday }: Props) => {
  const { t } = useTranslation("common");
  const description = t("aboutMe.description", { birthday });

  return (
    <section
      className="md:flex md:h-screen md:items-center md:justify-center md:py-16 md:px-16"
      id="aboutMe"
    >
      <div className="relative z-10 h-screen md:h-auto md:rounded-md md:border md:border-sky-500 md:bg-primary md:bg-opacity-90 md:p-4 md:shadow-2xl">
        <h2 className="pt-16 pb-4 text-center text-4xl md:hidden">
          {t("aboutMe.title")}
        </h2>
        <div className="lg:grid lg:grid-cols-4">
          <div className="md:col-span-3 md:flex md:items-center md:justify-center">
            <p className="md:text-2xl">{description}</p>
          </div>
          <div>
            <div className="flex items-center py-8 md:justify-center">
              <div className="relative mx-auto w-1/2 md:w-full">
                <div className="div-svg-galaxy w-full transform-gpu animate-rotate md:mx-auto md:w-56">
                  <SvgGalaxy />
                </div>
              </div>
            </div>
            <p className="text-center italic">- {t("aboutMe.quote")}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 768px) and (max-height: 800px) {
          .div-svg-galaxy {
            width: 10rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
