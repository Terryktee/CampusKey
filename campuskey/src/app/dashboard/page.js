import  AppSidebar  from "@/components/app-sidebar/app-sidebar"
import  ChartAreaInteractive  from "@/components/chart-area-interactive/chart-area-interactive"
import  DataTable  from "@/components/data-table/data-table"
import  SectionCards  from "@/components/section-cards/section-cards"
import  SiteHeader  from "@/components/site-header/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import data from "./data.json"
import AddPropertyPage from "@/components/add-property/add-property"
import Amenities from "@/components/amenties/amenties"
import ImageUpload from "@/components/ui/image-upload"
import PublishCard from "@/components/publish-card/publish-card"
import Property from "@/components/property/property"
export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {/*<SectionCards /> */}
              <AddPropertyPage />
              <Amenities />
              <ImageUpload />
              <PublishCard />
              <Property />
              {/* {<div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />} */}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
