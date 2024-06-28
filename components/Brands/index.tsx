import { Brand } from "@/types";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const brandsData: Brand[] = [
  {
    name: "Montre Shop",
    href: "https://www.montre-shop.com/",
    image: "/images/brands/Montre-removebg-preview.png",
  },
  {
    name: "Beauty By Claire",
    href: "https://beautybyclaire.rs/",
    image: "/images/brands/Claire-removebg-preview.png",
  },
  {
    name: "We Buy In Dubai",
    href: "https://webuyindubai.com/",
    image: "/images/brands/WeBuyInDubai-removebg-preview.png",
  },
  {
    name: "Swapabee",
    href: "https://play.google.com/store/apps/details?id=com.swapabee_20&hl=en_US&pli=1",
    image: "/images/brands/Swapabee-removebg-preview.png",
  },
  {
    name: "TicketFlow",
    href: "https://ticketflow.rs/",
    image: "/images/brands/TicketFlow-removebg-preview.png",
  },
  {
    name: "Arioso Investment AG",
    href: "https://arioso-investment-ag.netlify.app/",
    image: "/images/brands/Arioso_Investment-removebg-preview.png",
  },
  {
    name: "C2S",
    href: "https://c2s.fonis.rs/pocetna",
    image: "/images/brands/C2S-removebg-preview.png",
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container flex flex-col items-center justify-center rounded-xl bg-primary bg-opacity-5 pt-20">
        <SectionTitle
          title="Our Clients"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="mx-auto w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center gap-y-10 rounded-md py-8 px-8 sm:px-10"
              data-wow-delay=".1s"
            >
              {brandsData.map((brand, idx) => (
                <SingleBrand key={idx} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[180px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image
          src={image}
          alt={name}
          width={160}
          height={100}
        />
      </a>
    </div>
  );
};
