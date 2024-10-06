import { Service } from "@/types";

const SingleService = ({ service }: { service: Service }) => {
  const { icon, title, paragraph } = service;
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp flex flex-col items-center justify-center md:items-start"
        data-wow-delay=".15s"
      >
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-center text-xl font-bold text-black dark:text-white sm:text-2xl md:text-left lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-center text-base font-medium leading-relaxed text-textColor md:text-left">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleService;
