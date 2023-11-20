import { type HTMLAttributes } from "react";
import React from "react";
export interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
    /** Aggiunge un ombra per enfatizzare il componente rispetto alla pagina in cui è contenuto */
    shadow?: boolean;
    /** Aggiunge il comportamento "sticky" ai componenti contenuti */
    sticky?: boolean;
}
/**
 * Renderizza un wrapper per i componenti facenti parte dell'header
 */
export declare const HeaderWrapper: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLHeadingElement>>;
