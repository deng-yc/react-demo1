import { Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');


// rem为实际一个单位的实际大小
const rem=width / 10;

export const coreTheme={
    $rem: rem
}

// unit为设计稿1rem大小
const unit=750/10;

export function px2rem(number){
    return number / unit +"rem";
}