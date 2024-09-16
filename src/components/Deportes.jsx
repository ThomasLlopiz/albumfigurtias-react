import React from "react";
import { videos } from "../utiltis/img.json";
export const Deportes = () => {
  return (
    <div>
      <div
        id="Deportes"
        className="title text-white mt-24 flex justify-center align-center sm:mt-56"
      >
        <h1 className="max-w-screen-md text-center text-5xl relative hover:text-white sm:text-9xl">
          DEPORTES
        </h1>
      </div>
      <div className="relative mx-auto justify-center items-center gap-10 text-white w-4/6 lg:flex sm:gap-20">
        {videos.map((video) => (
          <div key={video.id} className="text-center">
            <video
              className="mt-3 w-full "
              src={video.src}
              autoPlay
              loop
            ></video>
            <h3 className="text-2xl mt-3 uppercase font-bold">{video.titel}</h3>
            <span className="text-sm sm:text-xl font-light">{video.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
