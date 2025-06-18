import SvgMeditation from './svg/SvgMeditation';
import useTranslatedMarkdown from '../hooks/useTranslatedMarkdown';

const Home = () => {
  const { getTMarkdown } = useTranslatedMarkdown({
    nameSpace: 'common',
  });

  return (
    <section className="flex h-screen items-center md:justify-center md:px-16 md:py-16">
      <div className="flex flex-col p-4 md:grid md:grid-cols-3 md:space-x-4 md:rounded-md md:border md:border-sky-500 md:bg-primary md:bg-opacity-90 md:shadow-2xl">
        <div className="md:col-span-3 md:flex md:flex-col md:justify-center lg:col-span-2">
          <div
            className="text-blue-300"
            dangerouslySetInnerHTML={{
              __html: getTMarkdown('home.init'),
            }}
          />
          <h1 className="text-2xl sm:text-3xl md:text-7xl">
            Ariel Villarreal.
          </h1>
          <div
            className="pb-1 text-red-300 sm:pb-4 md:text-2xl"
            dangerouslySetInnerHTML={{
              __html: getTMarkdown('home.subTitle'),
            }}
          />
          <div
            className="description pb-1 text-blue-300 sm:pb-4 md:text-3xl"
            dangerouslySetInnerHTML={{
              __html: getTMarkdown('home.description'),
            }}
          />
        </div>
        <SvgMeditation className="flex-grow object-contain md:col-span-3 md:mx-auto md:my-auto md:w-full md:max-w-xl lg:col-span-1" />
      </div>
      <style jsx>{`
        @media (min-width: 768px) and (max-height: 800px) {
          h1 {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
          .description {
            font-size: 1.5rem;
            line-height: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
