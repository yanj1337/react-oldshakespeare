import { useEffect } from "react";
import { defaultLanguage, languages } from "./config";
import { translations } from "./translations";
import { LanguageContext } from "./LanguageContext";

function getRouteInfo() {
  const pathSegments = window.location.pathname.split("/").filter(Boolean);

  const firstSegment = pathSegments[0];

  const hasLanguage = languages.some(({ lang }) => lang === firstSegment);

  const language = hasLanguage ? firstSegment : defaultLanguage;

  const routeSegments = hasLanguage ? pathSegments.slice(1) : pathSegments;

  const routePath = routeSegments.length ? `/${routeSegments.join("/")}` : "/";

  return {
    language,
    routePath,
  };
}

function findTranslation(dictionary, key) {
  return key.split(".").reduce((currentValue, keyPart) => {
    return currentValue?.[keyPart];
  }, dictionary);
}

export function LanguageProvider({ children }) {
  const { language, routePath } = getRouteInfo();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function t(key) {
    return (
      findTranslation(translations[language], key) ??
      findTranslation(translations[defaultLanguage], key) ??
      key
    );
  }

  function changeLanguage(nextLanguage) {
    const isSupportedLanguage = languages.some(
      ({ lang }) => lang === nextLanguage,
    );

    if (!isSupportedLanguage || nextLanguage === language) {
      return;
    }

    const localizedPath =
      routePath === "/" ? `/${nextLanguage}` : `/${nextLanguage}${routePath}`;

    window.location.href =
      localizedPath + window.location.search + window.location.hash;
  }

  function localizePath(path) {
    const normalizedPath =
      path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;

    return `/${language}${normalizedPath}`;
  }

  const contextValue = {
    language,
    routePath,
    t,
    changeLanguage,
    localizePath,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}
