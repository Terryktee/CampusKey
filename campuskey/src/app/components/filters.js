import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel
} from "@/components/ui/select"

export default function filters() {

    return (
            <div className="flex flex-col place-items-center p-2">
            <div>
           <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-blue-400">Select your own preference for accommodation</h1>
           </div>
           <div className="flex flex-row jusitfy-evenly p-2 gap-x-2">
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
                <p className="text-center">Sort by:</p>
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
            </div>
        

    )
}