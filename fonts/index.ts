import { Cormorant_SC, Josefin_Sans, Mulish, Open_Sans, Inter, Roboto } from "next/font/google"

export const openSans = Open_Sans({ preload: true, subsets: ["latin"] })
export const josefinSans = Josefin_Sans({ preload: true, subsets: ["latin"], weight: "700" })
export const comporantSC = Cormorant_SC({ weight: "600", subsets: ["latin"] })
export const mulish = Mulish({ weight: "500", subsets: ["latin"] })
export const inter = Inter({ subsets: ["latin"] });
export const roboto = Roboto({weight: '400', subsets: ['latin']})