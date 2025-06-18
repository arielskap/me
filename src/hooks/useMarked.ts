import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';

marked.use({ async: false });

const useMarked = () => {
  const parseMarked = (markdown: string) => {
    return DOMPurify.sanitize(marked.parse(markdown) as string);
  };

  return { parseMarked };
};

export default useMarked;
