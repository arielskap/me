import Link from "next/link";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { NextSeo } from "next-seo";

const Page404: NextPage = () => {
  const { t } = useTranslation("notFound");
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <NextSeo title={t("error")} description={t("description")} />
      <video autoPlay loop muted className="min-h-screen w-full object-cover">
        <source src="/videos/space.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="text-sm font-semibold uppercase tracking-wide text-black">
            {t("error")}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {t("surprise")} <span className="text-black">{t("iThink")}</span>{" "}
            {t("lost")}.
          </h1>
          <p className="mt-2 text-lg font-medium text-black">
            {t("description")}.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-black text-opacity-75 sm:bg-opacity-75 sm:hover:bg-opacity-90"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: await serverSideTranslations(locale ?? "en", ["notFound"]),
  };
};

export default Page404;
