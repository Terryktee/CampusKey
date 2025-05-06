import Nav from "../../components/navbar/nav";
import { Button } from "@/components/ui/button";
export default function Application(){
return(
    <>
    <Nav />
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

                    */}
                <Button > Accept  </Button>
                    <Button >  View </Button>
                    <Button >  Cancel  </Button>
                </div>
            </div>

            <div className="w-[740px] rounded-lg shadow-lg p-2 bg-sky-400 flex flex-col gap-y-2">
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

            <div className="w-[740px] rounded-lg shadow-lg p-2">
                <h1>Title : Student Name : House Owner</h1>
                <h3>Subtitle : Student Number : House Number</h3>
                <div>
                <Button > Accept  </Button>
                    <Button >  View </Button>
                    <Button >  Cancel  </Button>
                </div>
            </div>

            <div className="w-[740px] rounded-lg shadow-lg p-2">
                <h1>Title : Student Name : House Owner</h1>
                <h3>Subtitle : Student Number : House Number</h3>
                <div>
                <Button > Accept  </Button>
                    <Button >  View </Button>
                    <Button >  Cancel  </Button>
                </div>
            </div>


            <div className="w-[740px] rounded-lg shadow-lg p-2">
                <h1>Title : Student Name : House Owner</h1>
                <h3>Subtitle : Student Number : House Number</h3>
                <div>
                <Button > Accept  </Button>
                    <Button >  View </Button>
                    <Button >  Cancel  </Button>
                </div>
            </div>


            <div className="w-[740px] rounded-lg shadow-lg p-2">
                <h1>Title : Student Name : House Owner</h1>
                <h3>Subtitle : Student Number : House Number</h3>
                <div>
                <Button > Accept  </Button>
                    <Button >  View </Button>
                    <Button >  Cancel  </Button>
                </div>
            </div>


            <div className="w-[740px] rounded-lg shadow-lg p-2">
                <h1>Title : Student Name : House Owner</h1>
                <h3>Subtitle : Student Number : House Number</h3>
                <div>
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