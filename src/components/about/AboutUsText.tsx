import React from "react";

const AboutUsText = () => {
  return (
    <div className="text:2xl mb-[10%] flex w-full flex-col items-center gap-3 md:text-3xl">
      <p className="w-3/4 bg-black text-center font-balooTamma font-bold text-white md:w-2/3">
        Skateboarding club at UC Riverside is an official, university-recognized
        student organization that has existed for nearly 10 years. Its main
        purpose is fairly obvious: to foster a skate community at UC Riverside!
        One long-lasting feature of Skateclub is its extremely open-door policy
        to anyone interested in joining. Beginners are welcome, no fees are
        mandatory, and there are never any pressures to perform certain duties
        for the club – just come, skate, and connect!
        <br />
        <br />
        Historically, Skateclub has proven to be a unique entity because it
        allows students from any year or major to interact with one another
        without any barriers. Aside from the “show up whenever and skate”
        attitude, Skateclub also offers occasional road trips, various events
        around campus, and even filming for feature skate films.
        <br />
        <br />
        At the end of the day, Skateclub is a great excuse for students to take
        a break from their studies and to be outside, either working on new
        skate tricks or simply interacting with students that they might have
        otherwise never met!
        <br />
        <br />
        Use this website to learn more about the organization that commends
        academic excellence while being involved in the alluring culture of
        skateboarding!
      </p>

      <div className="mt-[5%] flex h-full w-3/4 flex-col gap-y-12 md:gap-y-20">
        <div className="flex flex-col gap-y-12 md:flex-row md:gap-x-20">
          <div className="flex-1">
            <iframe
              src="https://www.youtube.com/embed/ZCsvgNYj8KE"
              className="animate-jump-in aspect-video h-full w-full rounded border-[3px] shadow-[22px_22px_0px_0px_#F1F5F9] duration-200"
            />
          </div>
          <div className="flex-1">
            <iframe
              src="https://www.youtube.com/embed/vZQ2LUvnem0"
              className="animate-jump-in aspect-video h-full w-full rounded border-[3px] shadow-[22px_22px_0px_0px_#F1F5F9] duration-200"
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-12 md:flex-row md:gap-x-20">
          <div className="flex-1">
            <iframe
              src="https://www.youtube.com/embed/1ot8tbXaiTY"
              className="animate-jump-in aspect-video h-full w-full rounded border-[3px] shadow-[22px_22px_0px_0px_#F1F5F9] duration-200"
            />
          </div>
          <div className="flex-1">
            <iframe
              src="https://www.youtube.com/embed/eAQlP_wmF3I"
              className="animate-jump-in aspect-video h-full w-full rounded border-[3px] shadow-[22px_22px_0px_0px_#F1F5F9] duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsText;
