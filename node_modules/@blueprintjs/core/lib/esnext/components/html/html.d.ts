import * as React from "react";
export interface IElementRefProps<E extends HTMLElement> {
    /** Ref handler to access the instance of the internal HTML element. */
    elementRef?: (ref: E | null) => void;
}
export declare const H1: React.SFC<React.HTMLProps<HTMLHeadingElement> & IElementRefProps<HTMLHeadingElement>>;
export declare const H2: React.SFC<React.HTMLProps<HTMLHeadingElement> & IElementRefProps<HTMLHeadingElement>>;
export declare const H3: React.SFC<React.HTMLProps<HTMLHeadingElement> & IElementRefProps<HTMLHeadingElement>>;
export declare const H4: React.SFC<React.HTMLProps<HTMLHeadingElement> & IElementRefProps<HTMLHeadingElement>>;
export declare const H5: React.SFC<React.HTMLProps<HTMLHeadingElement> & IElementRefProps<HTMLHeadingElement>>;
export declare const H6: React.SFC<React.HTMLProps<HTMLHeadingElement> & IElementRefProps<HTMLHeadingElement>>;
export declare const Blockquote: React.SFC<React.HTMLProps<HTMLElement> & IElementRefProps<HTMLElement>>;
export declare const Code: React.SFC<React.HTMLProps<HTMLElement> & IElementRefProps<HTMLElement>>;
export declare const Pre: React.SFC<React.HTMLProps<HTMLElement> & IElementRefProps<HTMLElement>>;
export declare const Label: React.SFC<React.HTMLProps<HTMLLabelElement> & IElementRefProps<HTMLLabelElement>>;
export declare const OL: React.SFC<React.HTMLProps<HTMLOListElement> & IElementRefProps<HTMLOListElement>>;
export declare const UL: React.SFC<React.HTMLProps<HTMLUListElement> & IElementRefProps<HTMLUListElement>>;
