import { useEffect, useRef, useState } from "react";
import { languages } from "../../i18n/config";
import { useLanguage } from "../../i18n/LanguageContext";
import "./LanguageSwitcher.css";

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef(null);
  const triggerRef = useRef(null);
  const { language, changeLanguage } = useLanguage();

  const currentLanguage =
    languages.find(({ lang }) => lang === language) ?? languages[0];

  useEffect(() => {
    function handlePointerDown(event) {
      if (!switcherRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleLanguageSelect(nextLanguage) {
    setIsOpen(false);
    changeLanguage(nextLanguage);
  }

  return (
    <div className="language-switcher" ref={switcherRef}>
      <button
        aria-controls="language-options"
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`language-switcher__trigger${isOpen ? " is-open" : ""}`}
        onClick={() => setIsOpen((currentState) => !currentState)}
        ref={triggerRef}
        type="button"
      >
        <span>{currentLanguage.shortLabel}</span>
        <svg aria-hidden="true" viewBox="0 0 10 6">
          <path d="M1 1l4 4 4-4" />
        </svg>
      </button>

      {isOpen && (
        <div
          aria-label="Choose language"
          className="language-switcher__options"
          id="language-options"
        >
          {languages.map((item) => {
            const isActive = item.lang === language;

            return (
              <button
                aria-current={isActive ? "true" : undefined}
                className={`language-switcher__option${isActive ? " is-active" : ""}`}
                key={item.lang}
                onClick={() => handleLanguageSelect(item.lang)}
                type="button"
              >
                <span>{item.name}</span>
                <span className="language-switcher__option-code">
                  {isActive ? "✓" : item.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
