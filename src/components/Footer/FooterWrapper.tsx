import React, { type HTMLAttributes, type FC } from "react";
import { classNames } from "../../utils";
import ministeroLogo from "../../imgs/icon/ministero.svg"

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /** Aggiunge il nome dell'ente */
  titolo?: string;
  /** Aggiunge la descrizione dell'ente */
  descrizione?: string;
}

/**
 * Renderizza un wrapper per i componenti facenti parte dell'header
 */
export const FooterWrapper: FC<FooterProps> = ({ 
    titolo = "SIAN",
    descrizione = "", 
    children, 
    className, 
    ...props 
}) => {

  const classes = classNames(
    "it-footer",
    className
  );

  return (
    <footer
      className={classes}
      {...props}>
      <div className="it-footer-main">
        <div className="container container-inset">
          <div className="it-brand-wrapper">
            <a href="#">
              <img className="img-flui" src={`${ministeroLogo}#ministero-bg`} aria-hidden="true" />
              <div className="it-brand-text ps-3">
                <div className="h3 text-white">
                  {titolo}
                </div>
                <div>
                  {descrizione}
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
      <div className="it-footer-small-prints clearfix">
        <div className="container container-inset">
          <h3 className="visually-hidden">
            Sezione Link Utili
          </h3>
          <div className="menu-wrapper">
            {children}
          </div>
        </div>
      </div>
    </footer>
  )
};
