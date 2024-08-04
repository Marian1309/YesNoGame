import { Roboto } from 'next/font/google';
import LocalFont from 'next/font/local';

export const roboto = Roboto({ weight: ['400'], subsets: ['latin'] });
export const frizon = LocalFont({ src: './Frizon.ttf' });
export const clearSans = LocalFont({ src: './ClearSans-Medium.ttf' });
