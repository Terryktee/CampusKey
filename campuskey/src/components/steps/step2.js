import * as React from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function step1() {
    return (
        <div>
            <div className="p-6 md:p-8 space-y-6 place-self-center">
                <h1 className="text-5xl text-[#0D6CA3] text-bold ">Select Account Type !</h1>
                <p>Our app helps you connect with landlords who have trusted homes through our
                    verification process of personalized experinces and student policy
                </p>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a Account Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Account</SelectLabel>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="landlord">Landlord</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

        </div>
    )
}