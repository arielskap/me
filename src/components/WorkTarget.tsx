import Image from 'next/image';
import { IWork } from '../../@types';
import { Tag } from '../lib/enums';
import { classNames } from '../lib/functions';
import useTranslatedMarkdown from '../hooks/useTranslatedMarkdown';

const getColorTag = (tag: string) => {
  switch (tag) {
    case Tag.TYPESCRIPT:
      return 'bg-blue-500';
    case Tag.MONGODB:
      return 'bg-green-500';
    case Tag.NESTJS:
      return 'bg-red-500';
    case Tag.NEXTJS:
      return 'bg-violet-500';
    case Tag.TAILWINDCSS:
      return 'bg-emerald-500';
    case Tag['REACT NATIVE']:
      return 'bg-cyan-500';
    default:
      return 'bg-gray-500';
  }
};

const WorkTarget = ({ href, alt, title, description, img, tags }: IWork) => {
  const { getTMarkdown } = useTranslatedMarkdown({
    nameSpace: 'common',
  });
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
        <div className="description-hidden-on-hover absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-90 px-8 transition-opacity duration-500 hover:opacity-0">
          <div className="flex grow flex-col items-center justify-center">
            <div>
              <h3 className="rounded bg-black bg-opacity-90 px-2 text-center text-2xl text-blue-300">
                {title}
              </h3>
              <p className="mt-2 rounded bg-black text-center transition-opacity duration-500">
                {description}
              </p>
            </div>
          </div>
          <div className="pb-4">
            <div
              className="text-center text-lg font-medium"
              dangerouslySetInnerHTML={{
                __html: getTMarkdown('projects.technologies'),
              }}
            />
            <div className="flex flex-col">
              {tags.map(tag => {
                return (
                  <span
                    key={`${title}-${tag}`}
                    className={classNames(
                      'mt-2 rounded bg-black bg-opacity-90 px-2 text-center',
                      getColorTag(tag)
                    )}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </figure>
    </a>
  );
};

export default WorkTarget;
