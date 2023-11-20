import { forwardRef, type HTMLAttributes } from "react";
import React from "react";

// import sianlogo from "../../imgs/header/logo-color.svg"
// import sianlogoText from "../../imgs/header/logo-text.svg"

import { classNames } from "../../utils";

export interface HeaderContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Riduce la grandezza del componente HeaderContent */
  small?: boolean;
  ente?: string
}

/**
 * Componente che renderizza il contenuto principale dell'header.
 */
export const HeaderContent = forwardRef<HTMLDivElement, HeaderContentProps>(function HeaderContent(
  { 
    small, 
    ente,
    children, 
    className, 
    ...props 
  },
  ref
) {
  const classes = classNames("it-header-center-wrapper", { "it-small-header": small }, className);

  return (
    <div className={classes} ref={ref} {...props}>
      <div className="container">
        <div className="it-header-center-content-wrapper">
          <div className="it-brand-wrapper">
            <a href="test">
              <div className="navbar-brand">
                {/* <img src={sianlogo} aria-hidden="true" /> */}
              </div>
              {/* <div className="it-brand-text">
                <img src="./imgs/header/logo-text.svg" aria-hidden="true">
              </div> */}
            </a>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
});
