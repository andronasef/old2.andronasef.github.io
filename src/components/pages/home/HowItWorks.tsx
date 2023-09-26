import { useTranslation } from "react-i18next";
import Button from "../../common/Button";

function HowItWorks() {
  const { t } = useTranslation();
  return (
    <div className="grid items-center justify-center grid-cols-1 gap-5 text-start md:grid-cols-2 justify-items-center ">
      <img className="border-0 w-96" src="/assets/how-it-works.png" alt="" />
      <div className="flex flex-col items-center gap-3">
        <p className="text-2xl font-bold">
          {t("pages.homepage.components.howitworks.title")}
        </p>
        <div className="flex flex-col gap-2">
          <Step
            number={1}
            title={t("pages.homepage.components.howitworks.step1")}
          />
          <Step
            number={2}
            title={t("pages.homepage.components.howitworks.step2")}
          />
          <Step
            number={3}
            title={t("pages.homepage.components.howitworks.step3")}
          />
        </div>
        <Button link="/contact" style="self-start p-2">
          {t("pages.homepage.components.howitworks.button")}
        </Button>
      </div>
    </div>
  );
}

function Step({ title, number }: { title: string; number: number }) {
  return (
    <div className="flex gap-2">
      <p>{number}.</p>
      <p>{title}</p>
    </div>
  );
}

export default HowItWorks;
