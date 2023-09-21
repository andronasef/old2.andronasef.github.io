import { getLocaleUrl } from "astro-i18n-aut";
import { useTranslation } from "react-i18next";

function A({
  children,
  href = "",
  className = "",
}: {
  className?: string;
  children: React.ReactNode;
  href?: string;
}) {
  const { i18n } = useTranslation();

  const localizedUrl = getLocaleUrl(href, i18n.language);

  // check if the href is external
  const isExternal = href.startsWith("http") || href.startsWith("mailto");

  return (
    <a
      className={className}
      href={isExternal ? href : localizedUrl}
      target={isExternal ? "_blank" : "_self"}
    >
      {children}
    </a>
  );
}

export default A;
