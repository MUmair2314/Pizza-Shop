import React from "react";

export default function Progressor() {
  return (
    <div>
      <div className="flex items-start max-w-screen-lg w-full mx-auto mt-10 mb-10">
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-[#faddc3] p-1.5 flex items-center justify-center rounded-full shadow-lg shadow-[#38220f]">
              <span className="text-base text-white font-bold">1</span>
            </div>

            <div className="w-full h-1 mx-4 rounded-lg bg-[#fac89b]"></div>
          </div>

          <div className="mt-2 mr-4 ">
            <h6 className="text-[#38220f] font-semibold text-base">
              Step:1 Pick Your Food{" "}
            </h6>
            <p className="text-[#967259] text-xs">
            Savor the finest bites from our top-notch fast food collection.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-[#faddc3] p-1.5 flex items-center justify-center rounded-full shadow-lg shadow-[#38220f]">
              <span className="text-base text-white font-bold">2</span>
            </div>

            <div className="w-full h-1 mx-4 rounded-lg bg-[#fac89b]"></div>
          </div>

          <div className="mt-2 mr-4 ">
            <h6 className="text-[#38220f] font-semibold text-base">
              Step:2 Customize Your Order{" "}
            </h6>
            <p className="text-[#967259] text-xs">
            Tailor your fast food experience to perfection with our customization options.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-[#faddc3] p-1.5 flex items-center justify-center rounded-full shadow-lg shadow-[#38220f]">
              <span className="text-base text-white font-bold">3</span>
            </div>

            <div className="w-full h-1 mx-4 rounded-lg bg-[#fac89b]"></div>
          </div>

          <div className="mt-2 mr-4 ">
            <h6 className="text-[#38220f] font-semibold text-base">
              Step:3 Place Your Order{" "}
            </h6>
            <p className="text-[#967259] text-xs">
              Securely place your order to checkout and enjoy the convenience of
              home delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
