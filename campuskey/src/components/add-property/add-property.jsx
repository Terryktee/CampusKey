import PropertyCard from "@/components/property-card/property-card"
export default function AddPropertyPage(){

    return(

        <>
        <h1 className="px-4">Add your students accommodation listings</h1>
        <div className="slider flex flex-col gap-4">
            <div className="flex flex-row justify-center gap-4">
            <div className="flex gap-2">
                <div className="border-1 w-6 h-8 rounded-full bg-blue-400 text-white grid place-content-center">
                    <p>1</p>
                    </div>
                    <h1>Property Details</h1>
            </div>

            <div class="grid place-content-center ">
                <div className="w-16 h-[2px] bg-gray-300"></div>
            </div>

            <div className="flex gap-2">
                <div className="border-1 w-6 h-8 rounded-full bg-gray-300 grid place-content-center">
                    <p>2</p>
                    </div>
                    <h1>Amenties</h1>
            </div>

            <div class="grid place-content-center ">
                <div className="w-16 h-[2px] bg-gray-300"></div>
            </div>

            <div className="flex gap-2">
                <div className="border-1 w-6 h-8 rounded-full bg-gray-300 grid place-content-center">
                    <p>3</p>
                    </div>
                    <h1>Photo&Videos</h1>
            
            </div>

            <div class="grid place-content-center ">
                <div className="w-16 h-[2px] bg-gray-300"></div>
            </div>
            
            <div className="flex gap-2">
                <div className="border-1 w-6 h-8 rounded-full bg-gray-300 grid place-content-center">
                    <p>4</p>
                    </div>
                    <h1>Publish</h1>
            </div>

            </div>
            <PropertyCard />
        </div>
        </>
    )
}