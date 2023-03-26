import "i18next";
import common from "../public/locales/en/common.json";
import notFound from "../public/locales/en/notFound.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      common: typeof common;
      notFound: typeof notFound;
    };
  }
}
