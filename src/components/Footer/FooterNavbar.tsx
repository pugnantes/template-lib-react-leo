import React, { type HTMLAttributes, type FC, useState } from "react";

import { classNames } from "../../utils";

type OptionType = {
  link: string,
  descrizione: string
};

type OptionsType = Array<OptionType>;

export interface FooterNavbarProps extends HTMLAttributes<HTMLElement> {
  /** Da utilizzare per indicare che all'interno dell'HeaderNavbar verrà utilizzato un Megamenu */
  options: OptionsType;
}

/**
 * Componente che si occupa di renderizzare la NavBar all'interno dell'header,
 * Se HeaderWrapper possiede il flag sticky abilitato, rimarrà fissata in alto.
 */
export const FooterNavbar : FC<FooterNavbarProps> = ({ 
  options = [], 
  children, 
  className, 
  ...props 
}) => {
  const [prova, setProva] = useState(null);
  return (
    <ul className="it-footer-small-prints-list list-inline">
      {
        options.map((obj : OptionType) => {
         return (
          <li className="list-inline-item">
						<a href={obj.link} title={obj.descrizione}>
              {obj.descrizione}
            </a>
					</li>
         ) 
        })
      }
    </ul>
  );
};
