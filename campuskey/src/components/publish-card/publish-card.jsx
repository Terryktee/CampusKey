import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
export default function PublishCard() {

    return (

        <div className="grid place-content-center">
            <Card className="overflow-hidden bg-white shadow-md rounded-lg p-4 w-[800px]  ">
            <CardContent>
              <div className="flex justify-around ">
                <div>
                    <Button className="w-full bg-[#0D6CA3]">Save Draft</Button>
                </div>
                <div>
                    <Button className="w-full bg-[#0D6CA3]">Publish</Button>
                    </div>
            </div>
            </CardContent>

        </Card>
        </div>


    )
}