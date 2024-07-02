import { Brand } from "@/types";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { brandsData } from "@/constants";



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
              className="wow fadeInUp flex flex-wrap items-center justify-around sm:justify-center gap-y-5 rounded-md px-8 sm:px-10 md:px-[50px] xl:p-[50px] 2xl:px-[70px]"
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
    <div className="mx-3 w-fit flex items-center justify-center py-[15px] sm:mx-4 xl:mx-6 2xl:mx-8">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative flex max-w-[7rem] lg:max-w-[8rem] 2xl:max-w-[10rem] cursor-pointer items-center justify-center rounded-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
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
