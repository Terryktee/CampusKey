"use client";
import ImageUpload from "@/components/ui/image-uploading/image-uploading";
import { useState } from "react";

export default function ImageUploading() {
  const [imageURL, setImageURL] = useState(null);

  const handleUploadComplete = (url) => {
    setImageURL(url);
  };

  return (
    <main className="min-h-[90vh] flex items-center justify-center p-10">
      <div className="w-6/12 h-[300px]">
        <ImageUpload onUploadComplete={handleUploadComplete} />
      </div>
    </main>
  );
}
