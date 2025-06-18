import { useTranslation } from 'next-i18next';
import useMarked from './useMarked';

interface Props {
  nameSpace: 'common' | 'notFound';
}

const useTranslatedMarkdown = ({ nameSpace }: Props) => {
  const { parseMarked } = useMarked();
  const { t, i18n } = useTranslation(nameSpace);

  const getTMarkdown = (
    key: string,
    options?: { [key: string]: string | number }
  ) => {
    const defaultOptions = {};
    const tMarkdown = t(key as any, options || defaultOptions);
    return parseMarked(tMarkdown);
  };

  return {
    getTMarkdown,
    getT: t,
    i18n,
  };
};

export default useTranslatedMarkdown;
