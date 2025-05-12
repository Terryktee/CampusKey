import Image from "next/image";
export default function AboutUs() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-muted p-6 md:p-10">
            <div className="w-full max-w-4xl">

                <div className="flex flex-col gap-10">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-[#0D6CA3]">About Us</h1>
                        {/* Logo */}
                        <div className="flex justify-center mb-6">
                            <Image
                                src="/logo.jpg" // or .svg or .webp depending on your file
                                alt="CampusKey Logo"
                                width={120}
                                height={120}
                                className="object-contain rounded-full"
                            />
                        </div>
                        <p className="mt-4 text-muted-foreground text-balance">
                            CampusKey is a student-first accommodation platform created to simplify the way university students find safe, trusted, and affordable places to stay. Whether you're a first-year looking for your first room near campus or a senior trying to relocate closer to class, CampusKey connects you with verified landlords and real listings — all in one place.
                            <br />
                            <br />
                            We understand the stress that comes with student housing. That’s why we’ve built a solution that’s not just digital, but smart, secure, and community-driven.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0D6CA3]">Mission</h2>
                        <p className="text-muted-foreground text-balance">
                            To make student accommodation transparent, trusted, and accessible, helping students find housing that fits their needs, budget, and lifestyle — all without the usual hassle.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0D6CA3]">What We Offer</h2>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>Location-Based Listings — View accommodations near your campus, with distance and directions included.</li>
                            <li>Verified Landlords — We work with a network of landlords who are vetted and reviewed by the student community.</li>
                            <li>Secure Platform — Your safety and data privacy are our top priority.</li>
                            <li>Trusted Reviews — Read feedback from other students before making a decision.</li>
                            <li>Modern Listings — Photos, amenities, pricing, and contact info — all available at a glance.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0D6CA3]">Vision</h2>
                        <p className="text-muted-foreground text-balance">
                            To become the most trusted student accommodation ecosystem, bridging the gap between students and property owners, while building a safer, smarter housing network.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#0D6CA3]">Who We Are</h2>
                        <p className="text-muted-foreground text-balance">
                            CampusKey is proudly developed by Karvellie Tech Inc (KarvTech), founded by Terryktee — a passionate technologist committed to solving real-world problems through innovation.
                            <br />
                            <br />
                            Our team consists of students, developers, and designers who believe in empowering the next generation with the tools they need to thrive.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
