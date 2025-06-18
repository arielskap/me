import SvgGalaxy from './svg/SvgGalaxy';
import useTranslatedMarkdown from '../hooks/useTranslatedMarkdown';

interface Props {
  birthday: number;
}

const AboutMe = ({ birthday }: Props) => {
  const { getTMarkdown } = useTranslatedMarkdown({ nameSpace: 'common' });
  const description = getTMarkdown('aboutMe.description', { birthday });

  return (
    <section
      className="flex h-screen items-center md:justify-center md:px-16 md:py-16"
      id="aboutMe"
    >
      <div className="md:rounded-md md:border md:border-sky-500 md:bg-primary/90 md:p-4 md:shadow-2xl">
        <div
          className="pb-4 text-center text-4xl md:hidden"
          dangerouslySetInnerHTML={{ __html: getTMarkdown('aboutMe.title') }}
        />
        <div className="lg:grid lg:grid-cols-4">
          <div className="md:col-span-3 md:flex md:items-center md:justify-center">
            <div
              className="md:text-2xl"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <div>
            <div className="flex items-center py-8 md:justify-center">
              <div className="relative mx-auto w-1/2 md:w-full">
                <div className="div-svg-galaxy w-full transform-gpu animate-rotate md:mx-auto md:w-56">
                  <SvgGalaxy />
                </div>
              </div>
            </div>
            <div
              className="text-center italic"
              dangerouslySetInnerHTML={{
                __html: getTMarkdown('aboutMe.quote'),
              }}
            />
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
