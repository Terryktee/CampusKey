import { Button } from "@/components/ui/button";
import Link from "next/link"
export default function Nav() {
    return (
        <nav className=" flex flex-row justify-between p-2 font-semibold">
          <p className="scroll-m-20 text-1xl font-extrabold tracking-tight lg:text-2xl text-blue-400">CampusKey</p>
          <ul className="flex flex-row space-x-12">
            <li className="hover:p-1 hover:rounded-full hover:bg-sky-500 hover:text-white">
              <a href="/home">Home</a></li>
            <li className="hover:p-1 hover:rounded-full hover:bg-sky-500 hover:text-white">
              <a href="#">Blacklist</a>
              </li>
            <li className="hover:p-1 hover:rounded-full hover:bg-sky-500 hover:text-white">
              <a href="/team">Team</a>
              </li>
            <li className="hover:p-1 hover:rounded-full hover:bg-sky-500 hover:text-white">
              <a href="#">Booklet</a>
              </li>
          </ul>
          <Link href = "/contact-us" className="p-1 rounded-full bg-blue-400 text-white"> 
              Contact Us
            </Link>
        </nav>
    
    );
  }
  