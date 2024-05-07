import React from "react";
import Display from "./Display";

function Displays() {
  const displayItems = [
    {
      bgcolor: "bg-[#5355EE]",
      bgimg:
        "	https://assets-global.website-files.com/6334198f239547f2fccd84c1/64c1cdf5425388ed4532f603_Arqitel%20Logo%20White.svg",
      img1url:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15-p-500.webp",
      img2url:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp",
      videourl:
        "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
      paratxt: "Concept, Design, 3D, Webflow+WebGL Development",
      h3text:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    },
    {
      bgcolor: "bg-[#4a576b]",
      bgimg:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b4127d91ec4fa9b1124008_Logo%20White%202.svg",
      img1url:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204-p-500.png",
      img2url:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png",
      videourl: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
      paratxt: "Concept, Design, 3D, Webflow+WebGL Development",
      h3text:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    },
    {
      bgcolor: "bg-[#1626F3]",
      bgimg:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/660191edcdb42d79ba8c23aa_Logo.svg",
      img1url:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-500.webp",
      img2url:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f1160e50447ddfb490fb59_portfolioCard_cc-02%20(1).webp",
      videourl:
        "https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4",
      paratxt: "Concept, Design, Webflow Development",
      h3text:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow..",
    },
  ];
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto mt-20 ">
        {displayItems.map((item, index) => (
          <Display val={item} />
        ))}
      </div>
    </div>
  );
}

export default Displays;
