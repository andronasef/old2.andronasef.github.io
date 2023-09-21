import Button from "@components/common/Button";
import ProjectsList from "@components/common/ProjectsList";
import i18n from "@src/i18n";

function Portfolio({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <>
      <div className="flex flex-col gap-8 text-center">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">
            {i18n.t("pages.homepage.components.portfolio.title")}
          </p>
          <p className="text-sm">
            {i18n.t("pages.homepage.components.portfolio.subtitle")}
          </p>
        </div>
        {children}
        <Button link="/projects">
          {i18n.t("pages.homepage.components.portfolio.button")}
        </Button>
      </div>
    </>
  );
}
export default Portfolio;
