import { useTranslation } from "react-i18next";
import Button from "../../common/Button";
import Icon from "../../common/Icon";

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="h-[calc(100dvh-70px)] w-screen flex relative flex-col justify-center items-center [&>img]:absolute [&>img]:border-0">
      <div className="md:max-w-lg p-[15%] md:p-5 flex flex-col items-center justify-center gap-6 [&>*]:text-center mb-20">
        <p className="relative font-bold text-3xl md:text-4xl">
          {t("pages.homepage.components.hero.title")}
          <span className="relative underline">
            {t("pages.homepage.components.hero.end_title")}
            <Icon
              src="/assets/click-icon.svg?raw"
              className="absolute border-0 w-8 md:w-10 top-[60%] rtl:-left-[50%] rtl:scale-x-[-1] ltr:-right-[40%]"
            />
          </span>
        </p>
        <p className="text-md">
          {t("pages.homepage.components.hero.subtitle")}
        </p>
        <Button link="/contact">
          {t("pages.homepage.components.hero.button")}
        </Button>
      </div>
      <Icon
        className="absolute w-8 top-[10%] md:top-[25%] left-[5%]"
        src={"/assets/2-small-stars.svg"}
      />
      <Icon
        src={"/assets/small-star.svg"}
        className="absolute w-4 bottom-[25%] md:bottom-[35%] right-[5%]"
      />
      <Icon
        src={"/assets/divider-pencil.svg"}
        className="fill-[var(--primary)] -z-50 absolute w-screen rounded-none -bottom-8 sm:bottom-[-3rem] md:bottom-[-8rem]"
      />
    </div>
  );
}
export default Hero;
