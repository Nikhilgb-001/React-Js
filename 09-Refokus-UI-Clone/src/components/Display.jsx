import React from "react";
import Button from "./Button";

function Display({ val }) {
  return (
    // l
    <>
      <div className={`wrapper ${val.bgcolor} p-[2rem] rounded-3xl mt-10`}>
        <div
          style={{
            backgroundImage: `url(${val.bgimg})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full">
            <div className="flex">
              <div className="leftdiv w-1/2 items-end flex flex-col pt-[6em]">
                <div className="card1 w-[400px] h-[300px] mb-6">
                  <img className="rounded-3xl" src={`${val.img1url}`} />
                </div>
                <div className="card2 w-[40vw] object-cover">
                  <img className="rounded-3xl" src={`${val.img2url}`} />
                </div>
              </div>

              <div className="rightdiv pt-[2em] pl-6 rounded-3xl">
                <div className="videodiv h mb-6 rounded-3xl">
                  <video
                    className="w-full h-full rounded-3xl"
                    src={`${val.videourl}`}
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>
                <div className="testimonial">
                  <div className="testimonial-content ml-8">
                    <p className="mt-10 mb-5 ">{val.paratxt}</p>
                    <h3 className="mb-5 font-medium text-lg"> {val.h3text} </h3>
                    <Button title="Visit website" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
