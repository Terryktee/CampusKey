import { Button } from "@/components/ui/button"
export default function Applications() {

    return (
        <>
            <div className="flex justify-center ">
                <div className="flex flex-col gap-2">
                    <div className="w-[740px] rounded-lg shadow-lg p-2 bg-sky-400 flex flex-col gap-y-2">
                        <h1>Student Name: Tawanda T Kapumha</h1>
                        <h3>Student Number : N02422803P</h3>
                        <h3> Resident : 1447 Inkubu Rd , Selborne </h3>
                        <div className="flex gap-2">
                            {/* 
                            
                            if the accommodatin is not accepted yet , show the accept button 
                            revork the accept button to be a toggle button that shows the accept or decline button
                            if the student is black listed the student gets a tripple red color background
        
                            */}
                            <Button > Accept  </Button>
                            <Button >  View </Button>
                            <Button >  Cancel  </Button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}