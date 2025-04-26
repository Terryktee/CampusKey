import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export default function Gallery() {


  const image = [
    { src: "home.jpg" },
    { src: "home.jpg" },
    { src: "home.jpg" },
    { src: "home.jpg" },
    { src: "home.jpg" },
    { src: "home.jpg" },
    { src: "home.jpg" },
  ]

  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % image.length)
  const prev = () => setCurrent((prev) => (prev - 1 + image.length) % image.length)

  return (
    <>
      {image.slice(0, 5).map((img, index) => (
        <div
          key={index}
          className={` relative overflow-hidden ${index === 0 ? "row-span-2 " : ""
            }`}
        >
          <img
            src={img.src}
            alt={`Gallery image`}
            className="w-full h-full object-cover rounded-lg cursor-pointer rounded-md "
            onClick={() => {
              setCurrent(index)
              setOpen(true)
            }}
          />

        </div>
      ))}
      <Dialog open={open} onOpenChange={setOpen}>
        <VisuallyHidden>
          <DialogTitle>Image Viewer</DialogTitle>
        </VisuallyHidden>
        <DialogContent className="max-w-full w-screen h-screen flex items-center justify-center bg-black">
          <button
            className="absolute top-4 right-4 text-white z-10"
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>

          <button
            onClick={prev}
            className="absolute left-4 text-white z-10"
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={image[current].src}
            alt="Full Image"
            className="max-h-[90%] max-w-[90%] object-contain rounded-lg"
          />

          <button
            onClick={next}
            className="absolute right-4 text-white z-10"
          >
            <ChevronRight size={40} />
          </button>
        </DialogContent>
      </Dialog>
    </>
  )
}