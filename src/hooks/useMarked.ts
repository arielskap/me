import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";

const useMarked = () => {
  const parseMarked = (markdown: string) => {
    return DOMPurify.sanitize(marked.parse(markdown));
  };

  return {
    parseMarked,
  };
};

export default useMarked;
