import { Technology } from "@/types/technology";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const technologiesData: Technology[] = [
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
    id: 5,
    name: "Shopify",
    image: "/images/technologies/shopify.png",
  },
];

const Technologies = () => {
  return (
    <section className="pt-16" id="technologies">
      <div className="container flex flex-col items-center justify-center rounded-xl bg-primary bg-opacity-5 pt-20">
        <SectionTitle
          title="Technologies Stack"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center gap-y-5 rounded-md px-8 sm:px-10 md:px-[50px] xl:p-[50px] 2xl:px-[70px]"
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
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <div
        rel="nofollow noreferrer"
        className={`${
          image.includes("next") && "border-2 border-white bg-white"
        } relative flex h-32 w-32 cursor-pointer items-center justify-center rounded-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100`}
      >
        <Image src={image} alt={name} width={140} height={140} />
      </div>
    </div>
  );
};
