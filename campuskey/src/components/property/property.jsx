import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import Link from "next/link";
export default function Property(){

    return (
        <>
        <div className="grid grid-cols-4 gap-4">
            <div className="rounded-lg border-0 shadow p-4 gap-x-8 gap-y-4 font-bold">
            <div className="space-y-2 leading-7 [&:not(:first-child)]:mt-6">
                <img src="/home.jpg" className="rounded-lg" alt="House Image" />
                {/* OverView of Verified or not*/}
                <div className="flex flex-col text-base">
                    <div className="text-xl">Gunda <Badge>Verified</Badge></div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white text-end" >100$ per month </p>
                    <div className="flex justify-evenly ">
                        <p>Distance : 10 Min</p>
                        <p>Room : 2</p>
                    </div>
                    <div className="flex justify-evenly">
                            <Link href="/view" >Edit</Link>
                            <Button className="bg-blue-400">Delete</Button>
                        </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}