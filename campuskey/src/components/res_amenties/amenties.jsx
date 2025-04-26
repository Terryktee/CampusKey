//Icons

import { MdOutlineBedroomParent } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { PiHandDepositBold } from "react-icons/pi";
import { MdDateRange } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";
import { FaRestroom } from "react-icons/fa6";
import { IoIosWater } from "react-icons/io";
import { BiMaleFemale } from "react-icons/bi";
export default function Amenities(){

    return(
        <>
         <div >
            <MdOutlineBedroomParent size={32} />
            <p>Rent <br />
              <span>100</span></p>
          </div>
          <div> <CiLocationOn size={32} />
            <p>Location <br />
              Bulawayo ,Sleborne Park</p>
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
            <p>Gender <br /><span>Male</span></p>
          </div>
          <div> <IoIosWater size={32} />

            <p>Gender <br /> <span>Yes</span></p>
          </div>
        </>
    )
}