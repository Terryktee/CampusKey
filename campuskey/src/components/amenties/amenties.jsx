import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox"
import { CiWifiOn } from "react-icons/ci";
import { MdElectricBolt } from "react-icons/md";
import { FaGlassWaterDroplet } from "react-icons/fa6";
import { BiSolidFridge } from "react-icons/bi";
import { MdOutlineWallet } from "react-icons/md";
import { GiGasStove } from "react-icons/gi";

const amenties = [
    {
        id:1,
        name:"wifi",
        icon : <CiWifiOn className="text-2xl text-blue-500" />
    },
    {
        id:2,
        name:"Solar",
        icon : <MdElectricBolt className="text-2xl text-blue-500" />
    },
    {
        id:3,
        name:"Jojo Tank",
        icon: <FaGlassWaterDroplet className="text-2xl text-blue-500" />,
    },
    {
        id:4,
        name:"Fridge",
        icon: <BiSolidFridge className="text-2xl text-blue-500" />
    },
    {
        id:5,
        name:"Insuit",
        icon : <MdOutlineWallet className="text-2xl text-blue-500" />
    },
    {
        id:6,
        name:"GasStove",
        icon:<GiGasStove className="text-2xl text-blue-500" />
    },
]
export default function AmentiesCard() {

    return (
        <div className="grid place-content-center ">
             <Card className="overflow-hidden bg-white shadow-md rounded-lg p-4 w-[800px]  ">
            <CardTitle >Amenties</CardTitle>
            <CardContent>
                <div className="grid grid-cols-2 gap-4 p-2">
                        {
                            amenties.map((amenty) =>(
                                <div key={amenty.id} className="border flex items-center space-x-2 p-2">
                                    <Checkbox id={amenty.name} />
                                    <div className="flex items-center space-x-2">
                                        {amenty.icon}
                                        </div>
                                    <label htmlFor={amenty.name} className="text-sm font-medium text-gray-900">
                                        {amenty.name}
                                    </label>
                                    </div>
                            ))
                        }
                </div>
            </CardContent>

        </Card>
        </div>
    )
}