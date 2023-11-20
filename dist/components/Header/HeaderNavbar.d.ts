import React, { type HTMLAttributes } from "react";
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
export declare const HeaderNavBar: React.ForwardRefExoticComponent<HeaderNavbarProps & React.RefAttributes<HTMLElement>>;
