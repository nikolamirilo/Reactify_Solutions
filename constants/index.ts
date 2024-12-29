import { Client, Technology } from "@/types";
import { Resend } from "resend";

export const APP_URL = process.env.APP_URL!;
export const resend = new Resend(process.env.RESEND_API_KEY!);

export const technologiesData: Technology[] = [
  {
    id: 1,
    name: "React.js",
    image: "/images/technologies/react.png",
  },
  {
    id: 2,
    name: "Node.js",
    image: "/images/technologies/node.png",
  },
  {
    id: 3,
    name: "Next.js",
    image: "/images/technologies/next.png",
  },
  {
    id: 4,
    name: "SQL",
    image: "/images/technologies/sql.png",
  },
  {
    id: 5,
    name: "Mongo",
    image: "/images/technologies/wordpress.png",
  },
  {
    id: 6,
    name: "Python",
    image: "/images/technologies/python.png",
  },
  {
    id: 7,
    name: "Firebase",
    image: "/images/technologies/firebase.png",
  },
  {
    id: 8,
    name: "Tailwind",
    image: "/images/technologies/tailwind.png",
  },
  {
    id: 9,
    name: "Cloudinary",
    image: "/images/technologies/cloudinary.png",
  },
  {
    id: 10,
    name: "Shopify",
    image: "/images/technologies/shopify.png",
  },
  {
    id: 11,
    name: "Wix",
    image: "/images/technologies/wix.png",
  },
  {
    id: 12,
    name: "Clerk",
    image: "/images/technologies/clerk.png",
  },
];

export const clientsData: Client[] = [
  {
    name: "Montre Shop",
    href: "https://www.montre-shop.com/",
    image: "/images/clients/Montre-removebg-preview.png",
  },
  {
    name: "Minexa.ai",
    href: "https://www.minexa.ai/",
    image: "/images/clients/Minexa.png",
  },
  {
    name: "Beauty By Claire",
    href: "https://beautybyclaire.rs/",
    image: "/images/clients/Claire-removebg-preview.png",
  },
  {
    name: "We Buy In Dubai",
    href: "https://webuyindubai.com/",
    image: "/images/clients/WeBuyInDubai-removebg-preview.png",
  },
  {
    name: "Swapabee",
    href: "https://play.google.com/store/apps/details?id=com.swapabee_20&hl=en_US&pli=1",
    image: "/images/clients/Swapabee-removebg-preview.png",
  },
  {
    name: "TicketFlow",
    href: "https://ticketflow.rs/",
    image: "/images/clients/TicketFlow-removebg-preview.png",
  },
  {
    name: "Arioso Investment AG",
    href: "https://arioso-investment-ag.netlify.app/",
    image: "/images/clients/Arioso_Investment-removebg-preview.png",
  }
];
