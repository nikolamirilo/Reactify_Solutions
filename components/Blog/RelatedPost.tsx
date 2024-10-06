import Image from "next/image";
import Link from "next/link";

const RelatedPost = ({
  image,
  slug,
  title,
  date,
}: {
  image: string;
  slug: string;
  title: string;
  date: string;
}) => {
  return (
    <div className="flex items-center lg:block xl:flex">
      <div className="mr-5 lg:mb-3 xl:mb-0">
        <div className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]">
          <Image src={image} alt={title} fill />
        </div>
      </div>
      <div className="w-full">
        <h5>
          <Link
            href={slug}
            className="hover:text-primaryColor dark:hover:text-primaryColor mb-[6px] block text-base font-medium leading-snug text-black dark:text-white"
          >
            {title}
          </Link>
        </h5>
        <p className="text-xs font-medium text-textColor">{date}</p>
      </div>
    </div>
  );
};

export default RelatedPost;
