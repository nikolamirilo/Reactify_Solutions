import SectionTitle from "../Common/SectionTitle";
import { clientsData } from "@/constants";
import SingleClient from "./SingleClient";

const Clients = () => {
  return (
    <section className="pt-16">
      <div className="bg-primaryColor container flex flex-col items-center justify-center rounded-xl bg-opacity-5 pt-12">
        <SectionTitle
          title="Our Clients"
          paragraph="At Reactify Solutions, we are proud to partner with a diverse range of clients across various industries. From startups to established enterprises, our clients trust us to deliver innovative digital solutions that meet their unique needs."
          center
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="mx-auto w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-around gap-y-5 rounded-md px-8 sm:justify-center sm:px-10 md:px-[50px] xl:p-[50px] 2xl:px-[70px]"
              data-wow-delay=".1s"
            >
              {clientsData.map((client, idx) => (
                <SingleClient key={idx} client={client} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
