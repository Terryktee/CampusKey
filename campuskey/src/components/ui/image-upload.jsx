"use client";

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoCloudUploadOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Progress from "@/components/ui/radialProgressbar";




const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET;

const ImageUpload = ({ onUploadComplete }) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImagePath, setUploadedImagePath] = useState(null);

  const onUploadProgress = (progressEvent) => {
    if (progressEvent.total) {
      const percentage = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      setProgress(percentage);
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files?.length) {
      const image = event.target.files[0];
      setSelectedImage(image);
      handleImageUpload(image);
    }
  };

  const removeSelectedImage = () => {
    setLoading(false);
    setUploadedImagePath(null);
    setSelectedImage(null);
  };

  const handleImageUpload = async (image) => {
    if (!image) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", uploadPreset);   
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const image = acceptedFiles[0];
      setSelectedImage(image);
      handleImageUpload(image);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, noClick: true });

  return (
    <div className="space-y-3 h-full">
      <div {...getRootProps()} className="h-full">
        <label
          htmlFor="dropzone-file"
          className="relative flex flex-col items-center justify-center p-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 w-full visually-hidden-focusable h-full"
        >
          {loading && (
            <div className="text-center max-w-md">
              <Progress progress={progress} />
              <p className="text-sm font-semibold">Uploading Picture</p>
              <p className="text-xs text-gray-400">
                Do not refresh or perform any other action while the picture is being uploaded
              </p>
            </div>
          )}

          {!loading && !uploadedImagePath && (
            <div className="text-center">
              <div className="border p-2 rounded-md max-w-min mx-auto">
                <IoCloudUploadOutline size="1.6em" />
              </div>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Drag an image</span>
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-400">
                Select a image or drag here to upload directly
              </p>
            </div>
          )}

          {uploadedImagePath && !loading && (
            <div className="text-center space-y-2">
              <Image
                width={1000}
                height={1000}
                src={uploadedImagePath}
                className="w-full object-contain max-h-16 opacity-70"
                alt="uploaded image"
              />
              <div className="space-y-1">
                <p className="text-sm font-semibold">Image Uploaded</p>
                <p className="text-xs text-gray-400">
                  Click here to upload another image
                </p>
              </div>
            </div>
          )}
        </label>

        <Input
          {...getInputProps()}
          id="dropzone-file"
          accept="image/png, image/jpeg"
          type="file"
          className="hidden"
          disabled={loading || uploadedImagePath !== null}
          onChange={handleImageChange}
        />
      </div>

      {!!uploadedImagePath && (
        <div className="flex items-center justify-between">
          <Link
            href={uploadedImagePath}
            className=" text-gray-500 text-xs hover:underline "
          >
            Click here to see uploaded image :D
          </Link>

          <Button
            onClick={removeSelectedImage}
            type="button"
            variant="secondary"
          >
            {uploadedImagePath ? "Remove" : "Close"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
