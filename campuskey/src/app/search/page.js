import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Nav from "@/components/navbar/nav"
import Footer  from "@/components/footer/footer"
export default function Search() {

    return (
        <>
            <Nav />
            <div className="flex justify-around">
                <div className="flex w-full max-w-lg space-x-2 py-6">
                    <Input type="search" className="rounded-full" placeholder="Search" />
                    <Button type="submit" className="bg-white text-blue-400 rounded-full">Search</Button>
                </div>
                <h1 className="scroll-m-20 text-xl font-semibold tracking-tight py-8">20 results</h1>
            </div>

            <div className="flex justify-around py-2">
                    <div className="flex flex-col gap-4">
                        <div className="Property">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a property" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Property</SelectLabel>
                                    <SelectItem value="Boys Only">Boys Only</SelectItem>
                                    <SelectItem value="Girls only">Girls Only</SelectItem>
                                    <SelectItem value="Mixed">Mixed</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                        <div className="Distance">
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a Distance" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Distance</SelectLabel>
                                        <SelectItem value="Boys Only">less than 5 minutes</SelectItem>
                                        <SelectItem value="Girls only">5 minutes</SelectItem>
                                        <SelectItem value="ten">10 minutes</SelectItem>
                                        <SelectItem value="ten2">20 minutes</SelectItem>
                                        <SelectItem value="ten3">30 minutes</SelectItem>
                                        <SelectItem value="ten4">more than 30 minutes</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="Price Range">
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a property" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Price</SelectLabel>
                                        <SelectItem value="Boys Only">less than 80</SelectItem>
                                        <SelectItem value="Girls only">90</SelectItem>
                                        <SelectItem value="distance">100</SelectItem>
                                        <SelectItem value="Mixed">grater than 100</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="More filters"></div>
                        <div className="sort flex flex-row">
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Sort by :" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Sort</SelectLabel>
                                        <SelectItem value="Boys Only">Recommendation</SelectItem>
                                        <SelectItem value="Girls only">Cheap</SelectItem>
                                        <SelectItem value="Mixed">Expensive</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="w-[740px] rounded-lg shadow-lg p-2 bg-blue-400 flex flex-col gap-y-2">
                        <h1>Resident : Gunda Residents</h1>
                        <h3>Location : 1447 Inkubu Rd , Selborne </h3>
                        <div className="flex gap-2">
                            {/* 
                                    
                                    if the accommodatin is full the student gets a red box and a notification saying either full or not or still waiting for reply for full and the tomato for declinatin  
                
                                    if the student is black listed the student gets a tripple red color background
                                    */}
                            <Button >  Decline </Button>
                            <Button >  View </Button>
                            <Button >  Cancel  </Button>
                        </div>
                    </div>

                    <div className="w-[740px] rounded-lg shadow-lg p-2 bg-blue-400 flex flex-col gap-y-2">
                        <h1>Resident : Gunda Residents</h1>
                        <h3>Location : 1447 Inkubu Rd , Selborne </h3>
                        <div className="flex gap-2">
                            {/* 
                                    
                                    if the accommodatin is full the student gets a red box and a notification saying either full or not or still waiting for reply for full and the tomato for declinatin  
                
                                    if the student is black listed the student gets a tripple red color background
                                    */}
                            <Button >  Decline </Button>
                            <Button >  View </Button>
                            <Button >  Cancel  </Button>
                        </div>
                    </div>


                    <div className="w-[740px] rounded-lg shadow-lg p-2 bg-blue-400 flex flex-col gap-y-2">
                        <h1>Resident : Gunda Residents</h1>
                        <h3>Location : 1447 Inkubu Rd , Selborne </h3>
                        <div className="flex gap-2">
                            {/* 
                                    
                                    if the accommodatin is full the student gets a red box and a notification saying either full or not or still waiting for reply for full and the tomato for declinatin  
                
                                    if the student is black listed the student gets a tripple red color background
                                    */}
                            <Button >  Decline </Button>
                            <Button >  View </Button>
                            <Button >  Cancel  </Button>
                        </div>
                    </div>

                    <div className="w-[740px] rounded-lg shadow-lg p-2 bg-blue-400 flex flex-col gap-y-2">
                        <h1>Resident : Gunda Residents</h1>
                        <h3>Location : 1447 Inkubu Rd , Selborne </h3>
                        <div className="flex gap-2">
                            {/* 
                                    
                                    if the accommodatin is full the student gets a red box and a notification saying either full or not or still waiting for reply for full and the tomato for declinatin  
                
                                    if the student is black listed the student gets a tripple red color background
                                    */}
                            <Button >  Decline </Button>
                            <Button >  View </Button>
                            <Button >  Cancel  </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}