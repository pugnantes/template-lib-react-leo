import React, { type SVGProps } from "react";
import type { ColorVariants, SizeVariants } from "../../types";
import { type TBoostrapIcon, type TDxcIcon } from "./IconList";
export interface IconProps extends SVGProps<SVGSVGElement> {
    icon: TBoostrapIcon | TDxcIcon;
    color?: ColorVariants;
    bg?: ColorVariants;
    size?: SizeVariants;
    padded?: boolean;
    className?: string;
}
/**
 * UI component to display an svg icon
 * @param IconProps
 * @returns JSX
 */
export declare function Icon({ icon, color, bg, size, padded, className, ...svgProps }: IconProps): React.JSX.Element;
