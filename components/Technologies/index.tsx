import { Technology } from "@/types";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { technologiesData } from "@/constants";



const Technologies = () => {
  return (
    <section className="pt-16" id="technologies">
      <div className="container flex flex-col items-center justify-center rounded-xl bg-primary bg-opacity-5 pt-20">
        <SectionTitle
          title="Technologies Stack"
          paragraph="We continuously strive to stay at the forefront of technology, always adopting the latest advancements to deliver the best solutions."
          center
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-around sm:justify-center gap-y-5 rounded-md px-8 sm:px-10 md:px-[50px] xl:p-[50px] 2xl:px-[70px]"
              data-wow-delay=".1s"
            >
              {technologiesData.map((brand) => (
                <SingleTechnology key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

const SingleTechnology = ({ brand }: { brand: Technology }) => {
  const { image, name } = brand;

  return (
    <div className="mx-3 w-fit flex items-center justify-center py-[15px] sm:mx-4 xl:mx-6 2xl:mx-8">
      <div
        rel="nofollow noreferrer"
        className={`${image.includes("next") && "border-2 border-white bg-white"
          } relative flex max-w-[6rem] lg:max-w-[8rem] 2xl:max-w-[10rem] cursor-pointer items-center justify-center rounded-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100`}
      >
        <Image src={image} alt={name} width={140} height={140} />
      </div>
    </div>
  );
};
