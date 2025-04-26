"use client";
import Amenities from "@/components/res_amenties/amenties";
import Nav from "../components/nav";
import PhotoAlbum from "@/components/image-gallery/image-library";
import Footer from "../components/footer";

export default function AccommodationView() {
  return (
    <div>
      <Nav />
      <div>
        <div className="residents-details p-2 relative">
          <h1 className="text-2xl font-bold ">Residents Name</h1>
          <div className="residents-image-gallery h-96  overflow-hidden gap-1 grid grid-cols-3 py-4">
            <PhotoAlbum />
          </div>
        </div>
      </div>
        <div className="grid px-4 grid-cols-4  gap-x-12 gap-y-4">
         <Amenities />
        </div>
        <div className="flex flex-row p-4 ">
          <div className="w-2/4 bg-red-300">
            <h1 className="font-bold text-2xl">Description</h1>
            <p></p>
          </div>
          <div className="w-2/4 bg-green-300">
            <h1 className="font-bold text-2xl">Description</h1>
            <p></p>
          </div>
        </div>
        <Footer />
      </div>
   
  )
}
