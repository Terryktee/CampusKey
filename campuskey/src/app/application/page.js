import Nav from "../components/nav";
import { Button } from "@/components/ui/button";
export default function Application(){
return(
    <>
    <Nav />
    <div className="flex justify-center ">
        <div className="flex flex-col ">
            <div className="w-[740px] rounded-lg shadow-lg p-2">
                <h1>Title : Student Name : House Owner</h1>
                <h3>Subtitle : Student Number : House Number</h3>
                <div>
                    <Button > Accept | View | Cancel | </Button>
                </div>
            </div>
        </div>
    </div>
    </>
)

}