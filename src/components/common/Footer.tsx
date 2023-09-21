import { useTranslation } from "react-i18next";
import SocialLinks from "./SocialLinks";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t-2 border-t-white flex items-center justify-between w-screen px-5 py-3 text-white bg-[var(--primary)]">
      <p className="text-sm">© {t("components.footer.copyright")}</p>
      <div>
        <SocialLinks />
      </div>
    </footer>
  );
}
export default Footer;
