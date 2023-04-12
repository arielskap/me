import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Image from "next/image";
import colors from "tailwindcss/colors";
import { useSlider } from "../context/slider/Context";
import spacePinkIMG from "../../public/spacePink.jpg";
import { NextSeo } from "next-seo";
import { LanguageIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "next/link";
import useTranslatedMarkdown from "../hooks/useTranslatedMarkdown";

let flag = false;

const Header = () => {
  const { state } = useSlider();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navBgMenu = useRef<HTMLElement>(null);
  const pIconMenu = useRef<HTMLParagraphElement>(null);
  const divContainerMenu = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState("");
  const { getT, i18n } = useTranslatedMarkdown({
    nameSpace: "common",
  });
  const [menu, setMenu] = useState(
    getT("header.menu", { returnObjects: true })
  );
  const { locale } = useRouter();

  useEffect(() => {
    const swiper = state.swiper;
    const newMenu = getT("header.menu", { returnObjects: true });
    if (swiper && typeof swiper.activeIndex === "number") {
      setTitle(newMenu[swiper.activeIndex].title);
      swiper.on("slideChange", (localSwiper) => {
        setTitle(newMenu[localSwiper.activeIndex].title);
      });
    }
    setMenu(newMenu);
  }, [getT, i18n.language, state.swiper]);

  const handleMenuState = (setMenuState: Dispatch<SetStateAction<boolean>>) => {
    setMenuState(!menuOpen);
  };

  useEffect(() => {
    if (flag) {
      const navMenu = navBgMenu.current;
      const iconMenu = pIconMenu.current;
      if (navMenu && iconMenu) {
        if (menuOpen) {
          navMenu.classList.replace("close-menu", "open-menu");
          iconMenu.classList.replace("text-pink-500", "text-white");
          navMenu.classList.replace(
            "animate-slideOutUp",
            "animate-slideInDown"
          );
          navMenu.classList.replace("hidden", "block");
          divContainerMenu.current?.classList.replace(
            "bg-primary",
            "bg-transparent"
          );
        } else if (!menuOpen) {
          navMenu.classList.replace("open-menu", "close-menu");
          iconMenu.classList.replace("text-white", "text-pink-500");
          navMenu.classList.replace(
            "animate-slideInDown",
            "animate-slideOutUp"
          );
        }
      }
    } else flag = true;
  }, [menuOpen]);

  useEffect(() => {
    const hiddenMenu = () => {
      const navMenu = navBgMenu.current;
      if (navMenu && navMenu.classList.contains("close-menu")) {
        navBgMenu.current?.classList.replace("block", "hidden");
        divContainerMenu.current?.classList.replace(
          "bg-transparent",
          "bg-primary"
        );
      }
    };
    navBgMenu.current?.addEventListener("animationend", hiddenMenu);
  }, []);

  const handleChangePage = (numberPage: number, changeMenuState = true) => {
    if (state.swiper) {
      state.swiper.slideTo(numberPage, 500);
    }
    if (changeMenuState) {
      handleMenuState(setMenuOpen);
    }
  };

  return (
    <header className="sticky left-0 top-0 z-20 h-px w-full">
      <NextSeo
        title={title || menu[0].title}
        description="Portfolio de Ariel Santiago Villarreal Gutierrez desarrollador web y movil"
      />
      <div
        ref={divContainerMenu}
        className="container absolute left-0 right-0 top-0 z-20 mx-auto flex items-center justify-between border-b border-l border-r border-transparent bg-primary transition-colors duration-300 md:rounded-bl-3xl md:rounded-br-3xl md:border-sky-500"
      >
        <div className="p-4">
          <button
            type="button"
            onClick={() => {
              handleChangePage(0, false);
              setMenuOpen(false);
            }}
            className="rounded-full border-b-2 border-r-2 border-dotted border-pink-500 p-1"
          >
            <p
              ref={pIconMenu}
              className="h-6 w-6 text-center font-bold text-pink-500"
            >
              AV
            </p>
          </button>
        </div>
        <Link
          href="/old"
          locale={locale === "es" ? "en" : "es"}
          className="flex items-center rounded-lg border border-pink-500 px-2 py-1 text-white md:hidden"
        >
          <LanguageIcon className="mr-2 h-5 w-5" />
          <span className="sr-only">Change to</span>{" "}
          {locale === "es" ? "ES" : "EN"}
        </Link>
        <div className="hidden md:block">
          <h2 className="text-center text-4xl text-white">{title}</h2>
        </div>
        <div className="flex p-4">
          <button
            aria-label="menu"
            type="button"
            className={`menuIcon relative h-4 w-6 cursor-pointer ${
              menuOpen ? "open" : "close"
            }`}
            onClick={() => handleMenuState(setMenuOpen)}
          />
        </div>
      </div>
      <section
        className="close-menu absolute left-0 top-0 z-10 hidden h-screen  w-screen transform-gpu animate-slideOutUp bg-secondary"
        ref={navBgMenu}
      >
        <div className="absolute left-0 top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full">
            <Image
              src={spacePinkIMG}
              alt="Space pink"
              placeholder="blur"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <nav className="h-full w-full text-white">
          <ul className="flex h-full flex-col items-center justify-center space-y-6 bg-black bg-opacity-40 text-5xl md:pb-24">
            {menu.map((option, i) => {
              return (
                <li key={`button-menu-${i}`}>
                  <button
                    className="hover:underline"
                    type="button"
                    onClick={() => handleChangePage(i)}
                  >
                    {option.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
      <style jsx>{`
        .menuIcon:before {
          content: "";
          width: 100%;
          height: 3px;
          background-color: ${colors.white};
          position: absolute;
          right: 0;
          transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        }
        .menuIcon:after {
          content: "";
          width: 100%;
          height: 3px;
          background-color: ${colors.white};
          position: absolute;
          right: 0;
          top: 0;
          transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        }
        .menuIcon.close:before {
          bottom: 0;
          background-color: ${colors.pink[500]};
        }
        .menuIcon.close:after {
          top: 0;
          background-color: ${colors.pink[500]};
        }
        .menuIcon.open:before {
          bottom: 50%;
          transform: rotate(-45deg) translate3d(0, 50%, 0);
        }
        .menuIcon.open:after {
          top: 50%;
          transform: rotate(45deg) translate3d(0, -50%, 0);
        }
      `}</style>
    </header>
  );
};

export default Header;
