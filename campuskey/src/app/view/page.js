"use client";

import Nav from "../components/nav";
import { RowsPhotoAlbum } from "react-photo-album";
// import "react-photo-album/rows.css"; 

const photos = [
  { src: "home.jpg" },
  { src: "home.jpg" },
  { src: "home.jpg" },
  { src: "home.jpg" },
  { src: "home.jpg" },
  { src: "home.jpg" },
];
export default function AccommodationView() {
  return (
    <>
      <Nav />
      <div className="flex flex-col">
        <div className="size-64 bg-red-200 w-full">
          <h1 className="font-bold text-2xl">Gunda Residents</h1>
          <div className="grid grid-flow-col grid-rows-3 gap-4">
            <div className="row-span-3 bg-red-300">1</div>
            <div className="bg-green-300">2</div>
            <div className="bg-blue-300">3</div>
            <div className="bg-yellow-300">4</div>
            <div className="bg-purple-300">5</div>
          </div>

          <div className="campus-info grid grid-cols-4">
            <div className="bg-red-300">1</div>
            <div className="bg-green-300">2</div>
            <div className="bg-blue-300">3</div>
            <div className="bg-yellow-300">4</div>
            <div className="bg-purple-300">5</div>
            <div className="bg-green-300">6</div>
            <div className="bg-blue-300">7</div>
            <div className="bg-yellow-300">8</div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="description">

        </div>
        <div className="facilitties">

        </div>
      </div>
    </>
  );
}
