"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";

// Import step components
import Step1 from "@/components/steps/step1";
import Step2 from "@/components/steps/step2";
import Step3 from "@/components/steps/step3";
import Step4 from "@/components/steps/step4";



export default function RegistrationPage({ className, ...props }) {
  const [step, setStep] = useState(1);
  const [formdata,setFormData] = useState({});

  function handleNextStep(data) {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  }

  function handlePreviousStep() {
    if (step > 1) setStep((prev) => prev - 1);
  }

  // Map steps to components
  const stepComponents = {
    1: <Step1 />,
    2: <Step2 />,
    3: <Step3 />,
    4: <Step4 />,
  };
  function onSubmit(values) {
    const finalData = { ...formdata, ...values }; // Combine all step data
    console.log("Final Form Data Submitted:", finalData);
  }
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-full md:max-h-full">
        <div className={cn("flex flex-col  gap-6 max-w-full", className)}>
          <Card className="overflow-hidden bg-transparent  ">
            <CardTitle >Step {step} of 4</CardTitle>

            {/* Adjust content layout based on step */}
            <CardContent className="grid md:grid-cols-2 p-0 ">
              <div className="p-6 md:p-8 space-y-6 w-full">
                {stepComponents[step]}

                <div className="flex flex-row space-x-4">
                  {step > 1 && (
                    <Button
                      onClick={handlePreviousStep}
                      className="py-2 px-4 rounded-full text-white bg-gray-500"
                    >
                      Back
                    </Button>
                  )}
                  {step < 4 ? (
                    <Button
                      onClick={handleNextStep}
                      className="py-2 px-4 rounded-full text-white bg-[#0D6CA3]"
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                    onSubmit={onSubmit()}
                      className="py-2 px-4 rounded-full text-white bg-green-600"
                      type="submit"
                    >
                      Submit
                    </Button>
                  )}
                </div>
              </div>


  <div className="relative hidden bg-muted md:block">
    <Image
      src="/logo.jpg"
      alt="CampusKey Logo"
      layout="fill"
      className="absolute object-cover rounded-lg dark:brightness-[0.2] dark:grayscale h-1/2"
    />
  </div>
            </CardContent>
          </Card>

          <div className="text-center text-xs text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <a href="#" className="underline hover:text-primary">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-primary">
              Privacy Policy
            </a>.
          </div>
        </div>
      </div>
    </div>
  );
}
