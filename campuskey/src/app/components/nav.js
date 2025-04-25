import { Button } from "@/components/ui/button";
export default function Nav() {
    return (
        <nav className=" flex flex-row justify-between p-2 font-semibold">
          <p className="scroll-m-20 text-1xl font-extrabold tracking-tight lg:text-2xl text-blue-400">CampusKey</p>
          <ul className="flex flex-row space-x-12">
            <li className="hover:p-1 hover:rounded-full hover:bg-sky-500 hover:text-white">
              <a href="#">Home</a></li>
            <li className="hover:p-1 hover:rounded-full hover:bg-sky-500 hover:text-white">
              <a href="#">Blacklist</a>
              </li>
            <li className="hover:p-1 hover:rounded-full hover:bg-sky-500 hover:text-white">
              <a href="#">Team</a>
              </li>
            <li className="hover:p-1 hover:rounded-full hover:bg-sky-500 hover:text-white">
              <a href="#">Booklet</a>
              </li>
          </ul>
          <Button className="rounded-full bg-blue-400"> 
              Contact Us
            </Button>
        </nav>
    
    );
  }
  