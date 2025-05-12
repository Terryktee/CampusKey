import AddPropertyPage from "@/components/add-property/add-property"
import Amenities from "@/components/amenties/amenties"
import ImageUpload from "@/components/ui/image-upload"
import PublishCard from "@/components/publish-card/publish-card"

export default function CreateHousePage(){

    return(
        <>
        <AddPropertyPage />
        <Amenities  />
        <ImageUpload />
        <PublishCard />
        </>
    )
}