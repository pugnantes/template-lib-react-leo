import React, { type HTMLAttributes } from "react";

import { forwardRef } from "react";

import { classNames } from "../../utils";

import svgs from "../../extra/bootstrap-italia-v2.3.5/svg/sprites.svg";



export interface HeaderNavbarProps extends HTMLAttributes<HTMLElement> {
  /** Da utilizzare per indicare che all'interno dell'HeaderNavbar verrà utilizzato un Megamenu */
  megamenu?: boolean;
  /** Parametro per il controllo responsive del componente secondo Bootstrap Italia. */
  expand?: boolean | "sm" | "md" | "lg" | "xl" | "xxl";
}

/**
 * Componente che si occupa di renderizzare la NavBar all'interno dell'header,
 * Se HeaderWrapper possiede il flag sticky abilitato, rimarrà fissata in alto.
 */
export const HeaderNavBar = forwardRef<HTMLElement, HeaderNavbarProps>(function HeaderNavBar(
  { 
    expand, 
    megamenu, 
    children, 
    className, 
    ...props 
  },
  ref
) {
  const navClasses = classNames(
    className,
    "navbar",
    { "has-megamenu": megamenu },
    {
      "navbar-expand": expand === true,
      "navbar-expand-sm": expand === "sm",
      "navbar-expand-md": expand === "md",
      "navbar-expand-lg": expand === "lg",
      "navbar-expand-xl": expand === "xl",
      "navbar-expand-xxl": expand === "xxl"
    }
  );
  return (
    <div className="it-header-navbar-wrapper" {...props} id="header-nav-wrapper">
      <div className="container">
        <nav className={navClasses} ref={ref}>
          <button type="button" className="custom-navbar-toggler" aria-controls="nav1" aria-expanded="false" aria-label="Mostra/Nascondi la navigazione" data-bs-target="#nav1" data-bs-toggle="navbarcollapsible">
            <svg className="icon bg-override">
              <use href={`${svgs}#it-burger`}></use>
            </svg>

          </button>
          <div className="navbar-collapsable" id="nav1">
            <div className="overlay">

            </div>
            <div className="close-div">
              <button type="button" className="btn close-menu">
                <span className="visually-hidden">Nascondi la navigazione</span>
                <svg className="icon">
                <use href={`${svgs}#it-close-big`}></use>
                </svg>
              </button>
            </div>
            <div className="menu-wrapper">
                {children}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
});
