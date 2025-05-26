"use client";
import { MdOutlineBedroomParent } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { PiHandDepositBold } from "react-icons/pi";
import { MdDateRange } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";
import { FaRestroom } from "react-icons/fa6";
import { IoIosWater } from "react-icons/io";
import { BiMaleFemale } from "react-icons/bi";
import { useParams } from 'next/navigation';
import axios from "axios";
import { useState, useEffect } from "react";

export default function Amenities(){

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


    return(
        <>
         <div >
            <MdOutlineBedroomParent size={32} />
            <p>Rent <br />
              <span>{data.propertyPrice}</span></p>
          </div>
          <div> <CiLocationOn size={32} />
            <p>Location <br />
              {data.propertyAddress}</p>
          </div>
          <div> <PiHandDepositBold size={32} />
            <p>Deposit <br />
              <span>50$</span></p>
          </div>
          <div> <MdDateRange size={32} />
            <p>Date <br />
              <span>1 July 2025</span></p>
          </div>
          <div><GiPathDistance size={32} />
            <p>Distance <br />
              <span>2km : 10Mins</span>
            </p>
          </div>
          <div> <FaRestroom size={32} />
            <p>Room of <br /> <span>2</span></p>
          </div>
          <div> <BiMaleFemale size={32} />
            <p>Gender <br /><span>{data.propertyType}</span></p>
          </div>
          <div> <IoIosWater size={32} />

            <p>Back Up Water <br /> <span>{data.propertyType}</span></p>
          </div>
        </>
    )
}