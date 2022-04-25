import Theme from '../types/Theme'

const borderWidth = '0.2rem';

const defaultHue = 43;
const plantasiaHue = 120;
const aquaHue = 170;
const appleHue = 360;
const lavenderHue = 260;

const commonTheme = {
    breakpoint_xs: '360px',
    breakpoint_s: '520px',
    breakpoint_m: '790px',
    breakpoint_l: '1080px',
    breakpoint_xl: '1260px',
}


export const theme : Theme = {
    ...commonTheme,
    background: `hsla(${defaultHue}, 43%, 90%, 1)`,
    backgroundLight: `hsla(${defaultHue}, 43%, 93%, 1)`,
    backgroundDark: `hsla(${defaultHue}, 43%, 80%, 1)`,
    backgroundExtraDark: `hsla(${defaultHue}, 43%, 65%, 1)`,

    backgroundUnderlay: `hsla(${defaultHue}, 43%, 2%, 0.5)`,
    
    border: `hsla(0, 0%, 11%, 1)`,
    borderWidth: borderWidth,

    font: `hsla(0, 0%, 11%, 1)`,
    invertedFont: `hsla(${defaultHue}, 43%, 90%, 1)`,

    dateNavigationBackground: `hsla(0, 0%, 11%, 1)`,
    dateNavigationArrows: `hsla(0, 0%, 11%, 1)`,

    black: `hsla(0, 0%, 11%, 1)`,
    cream: `hsla(${defaultHue}, 43%, 90%, 1)`,

    blackOpc2: `hsla(0, 0%, 11%, 0.2)`,

    label1: `hsla(101, 50%, 85%, 1)`,
    label2: `hsla(209, 50%, 85%, 1)`,
    label3: `hsla(306, 50%, 85%, 1)`,
    label4: `hsla(360, 50%, 85%, 1)`,

    dateBorderColor: `transparent`,

    priorityH: `hsla(360, 50%, 85%, 1)`,
    priorityM: `hsla(330, 50%, 85%, 1)`,
    priorityL: `hsla(160, 50%, 85%, 1)`,
    priorityFont: `hsla(0, 0%, 11%, 1)`,

    dropdownShadow: `0px 4px 8px hsla(${defaultHue}, 43%, 25%, 0.5)`,
    profileButton: `white`,
}

export const aqua : Theme = {
    ...commonTheme,
    background: `hsla(${aquaHue}, 43%, 90%, 1)`,
    backgroundLight: `hsla(${aquaHue}, 43%, 93%, 1)`,
    backgroundDark: `hsla(${aquaHue}, 43%, 80%, 1)`,
    backgroundExtraDark: `hsla(${aquaHue}, 43%, 65%, 1)`,
    
    border: `hsla(0, 0%, 11%, 1)`,
    borderWidth: borderWidth,

    font: `hsla(0, 0%, 11%, 1)`,
    invertedFont: `hsla(${aquaHue}, 43%, 90%, 1)`,

    dateNavigationBackground: `hsla(0, 0%, 11%, 1)`,
    dateNavigationArrows: `hsla(0, 0%, 11%, 1)`,

    black: `hsla(0, 0%, 11%, 1)`,
    cream: `hsla(${aquaHue}, 43%, 90%, 1)`,

    label1: `hsla(101, 50%, 85%, 1)`,
    label2: `hsla(209, 50%, 85%, 1)`,
    label3: `hsla(306, 50%, 85%, 1)`,
    label4: `hsla(360, 50%, 85%, 1)`,

    blackOpc2: `hsla(0, 0%, 11%, 0.2)`,

    dateBorderColor: `transparent`,

    priorityH: `hsla(360, 50%, 85%, 1)`,
    priorityM: `hsla(330, 50%, 85%, 1)`,
    priorityL: `hsla(160, 50%, 85%, 1)`,
    priorityFont: `hsla(0, 0%, 11%, 1)`,

    dropdownShadow: `0px 4px 8px hsla(${aquaHue}, 43%, 25%, 0.5)`
}

export const plantasia : Theme = {
    ...commonTheme,
    background: `hsla(${plantasiaHue}, 43%, 90%, 1)`,
    backgroundLight: `hsla(${plantasiaHue}, 43%, 93%, 1)`,
    backgroundDark: `hsla(${plantasiaHue}, 43%, 80%, 1)`,
    backgroundExtraDark: `hsla(${plantasiaHue}, 43%, 65%, 1)`,

    backgroundUnderlay: `hsla(${plantasiaHue}, 43%, 2%, 0.5)`,
    
    border: `hsla(0, 0%, 11%, 1)`,
    borderWidth: borderWidth,

    font: `hsla(0, 0%, 11%, 1)`,
    invertedFont: `hsla(${plantasiaHue}, 43%, 90%, 1)`,

    dateNavigationBackground: `hsla(0, 0%, 11%, 1)`,
    dateNavigationArrows: `hsla(0, 0%, 11%, 1)`,

    black: `hsla(0, 0%, 11%, 1)`,
    cream: `hsla(${plantasiaHue}, 43%, 90%, 1)`,

    blackOpc2: `hsla(0, 0%, 11%, 0.2)`,

    label1: `hsla(101, 50%, 85%, 1)`,
    label2: `hsla(209, 50%, 85%, 1)`,
    label3: `hsla(306, 50%, 85%, 1)`,
    label4: `hsla(360, 50%, 85%, 1)`,

    dateBorderColor: `transparent`,

    priorityH: `hsla(360, 50%, 85%, 1)`,
    priorityM: `hsla(330, 50%, 85%, 1)`,
    priorityL: `hsla(160, 50%, 85%, 1)`,
    priorityFont: `hsla(0, 0%, 11%, 1)`,

    dropdownShadow: `0px 4px 8px hsla(${plantasiaHue}, 43%, 25%, 0.5)`,

    completed: `hsla(120, 79%, 72%, 1)`,
}

export const apple : Theme = {
    ...commonTheme,
    background: `hsla(${appleHue}, 43%, 90%, 1)`,
    backgroundLight: `hsla(${appleHue}, 43%, 93%, 1)`,
    backgroundDark: `hsla(${appleHue}, 43%, 80%, 1)`,
    backgroundExtraDark: `hsla(${appleHue}, 43%, 65%, 1)`,
    
    border: `hsla(0, 0%, 11%, 1)`,
    borderWidth: borderWidth,

    font: `hsla(0, 0%, 11%, 1)`,
    invertedFont: `hsla(${appleHue}, 43%, 90%, 1)`,

    dateNavigationBackground: `hsla(0, 0%, 11%, 1)`,
    dateNavigationArrows: `hsla(0, 0%, 11%, 1)`,

    black: `hsla(0, 0%, 11%, 1)`,
    cream: `hsla(${appleHue}, 43%, 90%, 1)`,

    blackOpc2: `hsla(0, 0%, 11%, 0.2)`,

    label1: `hsla(101, 50%, 85%, 1)`,
    label2: `hsla(209, 50%, 85%, 1)`,
    label3: `hsla(306, 50%, 85%, 1)`,
    label4: `hsla(360, 50%, 85%, 1)`,

    dateBorderColor: `transparent`,

    priorityH: `hsla(360, 50%, 85%, 1)`,
    priorityM: `hsla(330, 50%, 85%, 1)`,
    priorityL: `hsla(160, 50%, 85%, 1)`,
    priorityFont: `hsla(0, 0%, 11%, 1)`,

    dropdownShadow: `0px 4px 8px hsla(${appleHue}, 43%, 25%, 0.5)`
}

export const darkTheme : Theme = {
    ...commonTheme,
    background: 'hsla(250, 43%, 5%, 1)',
    backgroundLight: 'hsla(250, 43%, 8%, 1)',
    backgroundDark: 'hsla(250, 43%, 4%, 1)',
    backgroundExtraDark: 'hsla(250, 43%, 3%, 1)',
    
    border: 'hsla(250, 43%, 25%, 1)',
    borderWidth: borderWidth,

    font: 'hsla(0, 0%, 90%, 1)',
    invertedFont: 'hsla(250, 43%, 90%, 1)',
    dateNavigationBackground: 'hsla(250, 43%, 15%, 1)',
    dateNavigationArrows: 'hsla(250, 43%, 15%, 1)',

    black: 'hsla(0, 0%, 2%, 1)',
    cream: 'hsla(250, 43%, 90%, 1)',

    blackOpc2: `hsla(0, 0%, 11%, 0.2)`,

    label1: 'hsla(101, 50%, 85%, 1)',
    label2: 'hsla(209, 50%, 85%, 1)',
    label3: 'hsla(306, 50%, 85%, 1)',
    label4: 'hsla(360, 50%, 85%, 1)',

    dateBorderColor: 'hsla(250, 43%, 26%, 1)',

    priorityH: 'hsla(360, 50%, 85%, 1)',
    priorityM: 'hsla(330, 50%, 85%, 1)',
    priorityL: 'hsla(160, 50%, 85%, 1)',
    priorityFont: 'hsla(0, 0%, 11%, 1)',

    dropdownShadow: `0px 4px 8px hsla(250, 43%, 25%, 0.5)`
}

export default theme;