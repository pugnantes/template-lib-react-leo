import { type HTMLAttributes, type FC } from "react";
export interface FooterProps extends HTMLAttributes<HTMLElement> {
    /** Aggiunge il nome dell'ente */
    titolo?: string;
    /** Aggiunge la descrizione dell'ente */
    descrizione?: string;
}
/**
 * Renderizza un wrapper per i componenti facenti parte dell'header
 */
export declare const FooterWrapper: FC<FooterProps>;
