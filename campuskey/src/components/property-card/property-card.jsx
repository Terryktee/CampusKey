import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function PropertyCard() {

    return (
        <div className="grid place-content-center ">
             <Card className="overflow-hidden bg-white shadow-md rounded-lg p-4 w-[800px]  ">
            <CardTitle >Property Details</CardTitle>
            <CardContent>
                <h1>Property Title</h1>
                <Input type="text" placeholder="eg Modern smart accommodation" ></Input>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <h1>Select Property Type</h1>
                    <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Property type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Boys</SelectItem>
                        <SelectItem value="dark">Girls</SelectItem>
                        <SelectItem value="system">Mixed</SelectItem>
                    </SelectContent>
                </Select>
                    </div>
                <div><h1>Room for</h1>
                <Input type="Number" placeholder="eg Modern smart accommodation" className="w-64"></Input></div>

                <div><h1>Price</h1>
                <Input type="text" placeholder="eg Modern smart accommodation" className="w-64"></Input></div>
                
                <div>
                <h1>Locatin</h1>
                <Input type="text" placeholder="eg Modern smart accommodation" className="w-64"></Input>
                </div>
                </div>
            </CardContent>

        </Card>
        </div>
    )
}