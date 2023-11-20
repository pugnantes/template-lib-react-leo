import React, { type HTMLAttributes } from "react";
type OptionType = {
    link: string;
    descrizione: string;
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
export declare const HeaderNavbarLink: React.ForwardRefExoticComponent<HeaderNavbarLinkProps & React.RefAttributes<HTMLElement>>;
export {};
