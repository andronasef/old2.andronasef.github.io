import { useTranslation } from "react-i18next";
import Button from "./Button";

function CTA() {
  const { t } = useTranslation();
  return (
    <div className="text-center center min-h-[300px] p-10 py-[50px] bg-[var(--primary)]  text-white mt-10 w-full">
      <div className="flex-col gap-5 center md:max-w-lg">
        <p className="text-2xl font-bold">{t("components.cta.title")}</p>
        <p>{t("components.cta.description")}</p>
        <Button link="/contact" className="bg-white text-primary">
          {t("components.cta.button")}
        </Button>
      </div>
    </div>
  );
}
export default CTA;
