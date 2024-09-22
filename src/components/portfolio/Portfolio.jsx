import { useState } from "react";
import "./portfolio.scss";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Lobster&family=Sacramento&family=Tangerine&display=swap');
</style>;

export default function Portfolio() {
  const [currentslide, setCurrentslide] = useState(0);
  const data = [
    {
      id: "1",
      pic: "assets/project-1.png",
      desc: "Facebook clone dashboard built with React, featuring real-time Like functionality and a Profile page. Users can interact with posts, like/unlike them, and navigate to profiles, offering a smooth, responsive social media experience.",
      link: "https://clone98.netlify.app",
    },
    {
      id: "2",

      pic: "assets/project-4.png",
      desc: "Travel checklist page where users can add items, sort the list, and track packing progress. The page allows users to mark items as packed or unpacked and displays a completion percentage, helping them stay organized and ready for their trip.",
      link: "https://travel-list98.netlify.app",
    },
    {
      id: "3",
      pic: "assets/project-2.png",
      desc: "Website designed for seamlessly sharing bills among friends, featuring friend-adding and expense-tracking functionality. Users can easily add friends, split bills, and track shared expenses, making it simple to manage group payments and settle up efficiently.",
      link: "https://splitwise98.netlify.app",
    },
    {
      id: "4",

      pic: "assets/project-3.png",
      desc: "Restaurant menu page showcasing pizzas with prices, ingredients, and real-time availability, indicating whether each is available or sold out, offering a seamless and informative browsing experience.",
      link: "https://menu76.netlify.app",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentslide(currentslide > 0 ? currentslide - 1 : 3)
      : setCurrentslide(currentslide < data.length - 1 ? currentslide + 1 : 0);
  };
  return (
    <div className="portfolio" id="portfolio">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentslide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="project">
            <div className="item">
              <div className="top">
                <img src={d.pic} alt="" />
              </div>
              <div className="bottom">
                <span>
                  {d.desc}
                  <a href={d.link}>Visit page</a>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
