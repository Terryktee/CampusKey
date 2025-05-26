import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link";

import axios from "axios";
import { useState,useEffect } from "react";

export default function houseCard() {

        const [data,setData] = useState([]);
    useEffect( ()=>{
        axios.get("http://localhost:8080/api/v1/property")
        .then(response =>{
            setData(response.data);
        })
        .catch(
            error =>{
                console.error("Error fetching data" , error);
            }
        );
    },[])

    return (
        data.map((property,index) => (
            <div key = {index} className="rounded-lg border-0 shadow p-4 gap-x-8 gap-y-4 font-bold">
            <div className="space-y-2 leading-7 [&:not(:first-child)]:mt-6">
                <img src="home.jpg" className="rounded-lg" alt="House Image" />
                {/* OverView of Verified or not*/}
                <div className="flex flex-col text-base">
                    <div className="text-xl">{property.name} <Badge>Verified</Badge></div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white text-end" >{property.propertyPrice}$ per month </p>
                    <div className="flex justify-evenly ">
                        <p>{property.propertyAddress}</p>
                        <p>{property.propertyType}</p>
                    </div>
                    <div className="flex justify-evenly">
                            <Link href={`/view/${property.id}`}>View</Link>
                            <Button className="bg-blue-400">Apply</Button>
                        </div>
                </div>
            </div>
        </div>
        ))
    )
}