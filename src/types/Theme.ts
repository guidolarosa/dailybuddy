export default interface Theme {
    background: string,
    backgroundLight: string,
    backgroundDark: string,
    backgroundExtraDark: string,

    backgroundUnderlay?: string,

    border: string,
    borderWidth: string,

    font: string,
    invertedFont: string

    black: string,
    cream: string,

    blackOpc2: string,

    dateNavigationBackground: string,
    dateNavigationArrows: string,

    label1: string,
    label2: string,
    label3: string,
    label4: string,

    dateBorderColor: string,

    priorityH: string,
    priorityM: string,
    priorityL: string,
    priorityFont: string,

    dropdownShadow: string,

    completed?: string,

    profileButton?: string,

    breakpoint_xs: string,
    breakpoint_s: string,
    breakpoint_m: string,
    breakpoint_l: string,
    breakpoint_xl: string,
}

export interface Themes {
    light: any,
    dark: any,
    plantasia: any,
    aqua: any,
    apple: any
}