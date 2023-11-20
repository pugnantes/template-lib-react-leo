import React, { type HTMLAttributes } from "react";

import { forwardRef } from "react";

import { classNames } from "../../utils";

import { Link } from "react-router-dom";

type OptionType = {
  link: string,
  descrizione: string
};

type OptionsType = Array<OptionType>;

export interface HeaderNavbarLinkProps extends HTMLAttributes<HTMLElement> {
  /** Lista di link */
  options?: OptionsType;
}

/**
 * Componente che si occupa di renderizzare la NavBar all'interno dell'header,
 * Se HeaderWrapper possiede il flag sticky abilitato, rimarrà fissata in alto.
 */
export const HeaderNavbarLink = forwardRef<HTMLElement, HeaderNavbarLinkProps>(function HeaderNavBar(
  {
    options = [],
    children,
    className,
    ...props
  },
  ref
) {

  //TODO aggiungere active nel map per sottolineare quello attivo
  return (
    <ul className="navbar-nav">
      {
        options.map((obj: OptionType) => {
          return (
            <li className="nav-item">
              <Link
                to={`/${obj.link}`}
                className={location.pathname === `/${obj.link}` ? "active nav-link" : "nav-link"}
              >
                <span>
                  {obj.descrizione}
                </span>
                <span className="sr-only">
                  {location.pathname === `/${obj.link}` ? "current" : ""}
                </span>
              </Link>
            </li>
          )
        })
      }
    </ul>
  );
});
