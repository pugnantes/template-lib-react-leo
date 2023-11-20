import { type HTMLAttributes } from "react";
import React from "react";
export interface HeaderContentProps extends HTMLAttributes<HTMLDivElement> {
    /** Riduce la grandezza del componente HeaderContent */
    small?: boolean;
    ente?: string;
}
/**
 * Componente che renderizza il contenuto principale dell'header.
 */
export declare const HeaderContent: React.ForwardRefExoticComponent<HeaderContentProps & React.RefAttributes<HTMLDivElement>>;
