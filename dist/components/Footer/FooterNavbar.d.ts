import { type HTMLAttributes, type FC } from "react";
type OptionType = {
    link: string;
    descrizione: string;
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
export declare const FooterNavbar: FC<FooterNavbarProps>;
export {};
