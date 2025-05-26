"use client";

import Amenities from "@/components/res_amenties/amenties";
import Nav from "../../../components/navbar/nav";
import PhotoAlbum from "@/components/image-gallery/image-library";
import Footer from "../../../components/footer/footer";
import { VscGitStashApply } from "react-icons/vsc";
import axios from "axios";
import { useState, useEffect } from "react";
import { BellRing } from "lucide-react";
import { useParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function AccommodationView() {
  const { propertyId } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    if (propertyId) {
      axios
        .get(`http://localhost:8080/api/v1/property/${propertyId}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    }
  }, [propertyId]); 

  const AboutRes = [
    {
      title: "Only verified students can apply",
      description: "Nust , ZSM , Poly , Uz etc",
    },
    {
      title: "Application deadlines and availability may change without notice.",
    },
    {
      title: "Misuse of the platform (e.g., false applications) may result in account suspension.",
    },
    {
      title: "We are not responsible for any disputes between landlords and students.",
    },
    {
      title: "Only Apply to verified listings",
    },
    {
      title: "Please read the terms and conditions carefully before applying.",
    },
  ];

  return (
    <div>
      <Nav />
      <div className="residents-details p-2 relative">
        <h1 className="text-2xl font-bold ">{data.name}</h1>
        <div className="residents-image-gallery h-96 overflow-hidden gap-1 grid grid-cols-3 py-4">
          <PhotoAlbum images={data.pictures || []} />
        </div>
      </div>

      <div className="grid px-4 grid-cols-4 gap-x-12 gap-y-4">
        <Amenities />
      </div>

      <div className="flex flex-row justify-around p-4">
        <div className="w-2/4 ">
          <h1 className="font-bold text-2xl">Description</h1>
          <p className="text-sm text-muted-foreground text-balance inline-block align-middle py-2">
            {data.propertyDescription || "No description available."} <br/>
            <span>The property also offers the following amenties:</span><br/>
            {data.amenties && data.amenties.map((amenity, index) => (
              <span key={index} className="text-blue-500">
                {index+1}.{amenity.name}{index < data.amenties.length - 1 ? ',' : ''}<br/>
              </span>
            ))}

                      
          </p>
        </div>
        <div className="bg-sky-100/20 backdrop-blur-md border border-white/20 shadow-md rounded-xl">
          <Card>
            <CardHeader>
              <CardTitle>Terms and Conditions</CardTitle>
              <CardDescription>
                Read Terms and Conditions before applying
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {AboutRes.map((notification, index) => (
                <div
                  key={index}
                  className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {notification.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex items-center space-x-4 rounded-md border p-4">
                <BellRing />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Apply Terms and Conditions
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Send notification to your WhatsApp number
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-400">
                <VscGitStashApply /> Apply
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
