import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { buttonMenuItems } from "../../data/homeContent";
import { useLanguage } from "../../i18n/LanguageContext";
import "./ButtonMenu.css";

export function ButtonMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const closeButtonRef = useRef(null);
  const menuButtonRef = useRef(null);

  const { t, localizePath } = useLanguage();

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      menuButton?.focus();
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        className="menu-button"
        type="button"
        aria-label="Open menu"
        aria-controls={menuId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        ref={menuButtonRef}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen &&
        createPortal(
          <div
            className="button-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="button-menu__panel" id={menuId}>
              <button
                className="button-menu__close"
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
                ref={closeButtonRef}
              >
                <span />
                <span />
              </button>

              <nav
                className="button-menu__navigation"
                aria-label="Full navigation"
              >
                {buttonMenuItems.map((item) =>
                  item.isDisabled ? (
                    <span
                      className="button-menu__link button-menu__link--disabled"
                      aria-disabled="true"
                      key={item.translationKey}
                    >
                      {t(item.translationKey)}
                    </span>
                  ) : (
                    <a
                      className="button-menu__link"
                      href={localizePath(item.href)}
                      key={t(item.translationKey)}
                      onClick={closeMenu}
                    >
                      {t(item.translationKey)}
                    </a>
                  ),
                )}
              </nav>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
