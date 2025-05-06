import Nav from "@/components/navbar/nav";
import Footer from "@/components/footer/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Filters from "@/components/filters/filters";
import HouseCard from "@/components/card/house_card";


export default function Home() {
  return (
    <div>
      <Nav />
      <main>
        
        <div className="h-56 place-items-center bg-blue-400 py-16 ">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">Find your off-campus home</h1>
          <div className="flex w-full max-w-lg space-x-2 py-6">
            <Input type="search" className="rounded-full" placeholder="Search" />
            <Button type="submit " className="bg-white text-sky-400 rounded-lg">Search</Button>
          </div>

        </div>
        <Filters />
        {/* Properties Code*/}
        <div className="flex flex-row justify-center-safe p-2">

          <div className=" flex flex-col p-2 w-1/3">
            <div>
              <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">Facilities</h1>
              <ul className="grid grid-rows-2 gap-2 p-2">
                <li><input type="checkbox" /> wifi</li>
                <li><input type="checkbox" /> Backup Zesa</li>
                <li><input type="checkbox" /> Backup Water</li>
                <li><input type="checkbox" /> GasStove</li>
                <li><input type="checkbox" /> Beds</li>
                <li><input type="checkbox" /> Fridge</li>
                <li><input type="checkbox" /> Insuit</li>
                <li><input type="checkbox" /> Chair and Desk</li>
              </ul>
            </div>
            <div>
              <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">Services</h1>
              <ul className="grid grid-rows-2 gap-2 p-2">
                <li><input type="checkbox" /> Security</li>
                <li><input type="checkbox" />Care taker</li>
              </ul>
            </div>
            <div>
            <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">Room Type</h1>
            <ul className="grid grid-rows-2 gap-2 p-2">
                <li><input type="checkbox" /> Room of 1</li>
                <li><input type="checkbox" />Room of 2</li>
                <li><input type="checkbox" />Room of 3</li>
                <li><input type="checkbox" />Room of more than 3</li>
              </ul>      
            </div>
          </div>
          <div className="right-box  p-2 ">
            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-blue-400 text-center">Available off-campus houses</h1>
            <div className=" grid grid-cols-4 gap-2 py-4 text-blue-400 ">
              <HouseCard />
              <HouseCard />
              <HouseCard />
              <HouseCard />
              <HouseCard />
            </div>
          </div>
        </div>
      </main>
      {/* footer Code*/}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
