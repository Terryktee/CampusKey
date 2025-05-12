import StudentsDataTable from "@/components/data-table/data-table"
import data from "./data.json"
export default function StudentsPage(){

    return(
        <>
        <StudentsDataTable data={data} />
        </>
    )
}