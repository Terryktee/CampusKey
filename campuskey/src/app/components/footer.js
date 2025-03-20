export default function Home() {
    return (
      <div>
        {/* footer Code*/}
        <h1>About CampusKey</h1>
        <ul>
            <li>About Us</li>
            <li>Team</li>
            <li>How it works</li>
            <li>Careers</li>
        </ul>
        <h1>Resources</h1>
        <ul>
            <li>Help Center</li>
            <li>Student Guide</li>
        </ul>
        <h1>Legal</h1>
        <ul>
            <h1>Terms of Services</h1>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
        </ul>

        <div>
            <p>@copyright 2025</p>
        </div>
        <Card className="overflow-hidden bg-transparent  ">
            <CardTitle >Step {step} of 4</CardTitle>

            {/* Adjust content layout based on step */}
            <CardContent className={`p-0 ${step === 3 || step ===4 ? "flex justify-center" : "grid md:grid-cols-2"}`}>
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
                      onClick={() => alert("Form submitted!")}
                      className="py-2 px-4 rounded-full text-white bg-green-600"
                    >
                      Submit
                    </Button>
                  )}
                </div>
              </div>

              {/* Hide Image on Step 3 and Step 4 */}
              {step !== 3 && step !==4 && (
                <div className="relative hidden bg-muted md:block">
                  <Image
                    src="/logo.jpg"
                    alt="CampusKey Logo"
                    layout="fill"
                    className="absolute object-fit rounded-lg dark:brightness-[0.2] dark:grayscale"
                  />
                </div>
              )}
            </CardContent>
          </Card>

      </div>
    );
  }
  
  