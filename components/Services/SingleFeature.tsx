import { Service } from "@/types";

const SingleService = ({ service }: { service: Service }) => {
  const { icon, title, paragraph } = service;
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp flex flex-col items-start justify-center md:items-start"
        data-wow-delay=".15s"
      >
        <div className="bg-primaryColor text-primaryColor mb-5 flex h-[80px] w-[80px] items-center justify-center rounded-md bg-opacity-10">
          {icon}
        </div>
        <h3 className="mb-5 text-left text-xl font-bold text-black dark:text-white sm:text-2xl max-w-md md:text-left lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-left text-base font-medium leading-relaxed text-textColor md:text-left">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleService;
