import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function Gallery({ images }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  if (!images || images.length === 0) {
    return <p className="text-muted-foreground">No images available.</p>;
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.slice(0, 5).map((img, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg ${index === 0 ? "row-span-2 col-span-2" : ""}`}
          >
            <img
              src={img.imageUrl}
              alt={`Gallery image ${index}`}
              className="w-full h-48 md:h-60 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={() => {
                setCurrent(index);
                setOpen(true);
              }}
            />
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <VisuallyHidden>
          <DialogTitle>Image Viewer</DialogTitle>
        </VisuallyHidden>
        <DialogContent className="max-w-full w-screen h-screen p-0 flex items-center justify-center bg-black">
          <button
            className="absolute top-4 right-4 text-white z-10"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            onClick={prev}
            className="absolute left-4 text-white z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={images[current].imageUrl}
            alt={`Full image ${current}`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />
          <button
            onClick={next}
            className="absolute right-4 text-white z-10"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
}
