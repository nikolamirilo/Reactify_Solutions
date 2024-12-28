"use client";
import React, { useState } from "react";
import StarRatings from "../../node_modules/react-star-ratings";
import { addNewTestimonial } from "@/actions";
import { revalidateData } from "@/helpers/server";

const CreateTestimonial = () => {
  const [rate, setRate] = useState(0);
  const [fullName, setFullName] = useState("");
  const [profession, setProfession] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    const res = await addNewTestimonial(fullName, profession, content, rate);
    if (res) {
      revalidateData();
      alert("Successfully posted testimonial");
      setFullName("");
      setRate(0);
      setProfession("");
      setContent("");
    }
  }
  return (
    <section id="contact" className="overflow-hidden pt-5 pb-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full max-w-[70rem] px-4">
            <div
              className="wow fadeInUp mb-12 rounded-md py-11 px-8 bg-opacity-5 bg-primaryColor sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
            "
            >
              <form action="submit" onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Full Name:
                      </label>
                      <input
                        value={fullName}
                        onChange={(e: any) => {
                          setFullName(e.target.value);
                        }}
                        type="text"
                        placeholder="Enter your name"
                        className="focus:border-primaryColor w-full rounded-md border border-transparent py-3 px-6 text-base text-dark shadow-one outline-none focus-visible:shadow-none bg-gray-200 dark:text-white dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="profession"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Profession:
                      </label>
                      <input
                        value={profession}
                        onChange={(e: any) => {
                          setProfession(e.target.value);
                        }}
                        type="text"
                        placeholder="Enter your profession"
                        className="focus:border-primaryColor w-full rounded-md border border-transparent py-3 px-6 text-base text-dark shadow-one outline-none focus-visible:shadow-none bg-gray-200 dark:text-white dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="mb-8 w-full px-4">
                    <StarRatings
                      starRatedColor="#fbb040"
                      starHoverColor="#fbb040"
                      starDimension="30px"
                      rating={rate}
                      changeRating={(e: any) => {
                        setRate(e);
                      }}
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Testimonial:
                      </label>
                      <textarea
                        value={content}
                        onChange={(e: any) => {
                          setContent(e.target.value);
                        }}
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="focus:border-primaryColor w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-dark shadow-one outline-none focus-visible:shadow-none bg-gray-200 dark:text-white dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="bg-primaryColor rounded-md py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateTestimonial;
