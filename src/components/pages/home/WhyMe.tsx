import { useTranslation } from "react-i18next";

function WhyMe() {
  const { t } = useTranslation();

  return (
    <div className="mt-[50px] z-10 flex flex-col items-center justify-center gap-5 text-center md:py-10 lg:pt-32">
      <p className="text-2xl font-bold">
        {t("pages.homepage.components.whyme.title")}
      </p>
      <div className="grid justify-between grid-cols-1 gap-5 md:grid-cols-3">
        <Reason
          title={t("pages.homepage.components.whyme.reason1.title")}
          description={t("pages.homepage.components.whyme.reason1.description")}
          icon="reports-icon.svg"
        />
        <Reason
          title={t("pages.homepage.components.whyme.reason2.title")}
          description={t("pages.homepage.components.whyme.reason2.description")}
          icon="fast-icon.svg"
        />
        <Reason
          title={t("pages.homepage.components.whyme.reason3.title")}
          description={t("pages.homepage.components.whyme.reason3.description")}
          icon="location-icon.svg"
        />
      </div>
    </div>
  );
}

function Reason({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <img className="w-12 border-0" src={`/assets/${icon}`} alt="" />
      <p className="text-xl font-semibold">{title}</p>
      <p className="text-bg">{description}</p>
    </div>
  );
}

export default WhyMe;
