import { Dimensions } from "react-native"
export const AppColors={
    blue:{
        primary:'#0554F2',
        secondary:'#2EDFF2',
        tertiary:'#1B8EF2',
        button:'#2EDFF2',
        whiteRGBA:'rgba(255,255,255,0.7)',
        black:'#000000',
        white:"#ffffff",
        lightGrey:'#f0f0f0'
    }
}
export const AppFontFamily={
    bold:'Poppins-Bold',
    regular:'Poppins-Regular',
    light:'Poppins-Light',
}
export const AppFontSize={
    small:14,
    medium:18,
    large:24,
    extraLarge:32
}
export const WINDOW_HEIGHT = Dimensions.get('window').height
export const WINDOW_WIDTH = Dimensions.get('window').width
export const MAINCARD_WIDTH = WINDOW_WIDTH*0.85