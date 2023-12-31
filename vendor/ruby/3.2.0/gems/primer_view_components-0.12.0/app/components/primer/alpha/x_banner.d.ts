declare class XBannerElement extends HTMLElement {
    #private;
    titleText: HTMLElement;
    dismiss(): void;
    show(): void;
    hide(): void;
}
declare global {
    interface Window {
        XBannerElement: typeof XBannerElement;
    }
}
export {};
