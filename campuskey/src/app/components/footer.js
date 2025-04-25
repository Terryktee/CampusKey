export default function Home() {
    return (
      <footer className="grid grid-cols-4 bg-blue-400 p-2 text-white">
        {/* footer Code*/}
        <div>
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">About CampusKey</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">CampusKey is an innovative solution designed to simplify the search for student accommodation </p>
        </div>

        <div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">About Us</h3>
        <ul>
            <li>Team</li>
            <li>How it works</li>
            <li>Careers</li>
            <li>About Us</li>
        </ul>
        </div>
        <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Resources</h3>
        <ul>
            <li>Help Center</li>
            <li>Student Guide</li>
        </ul>
        </div>
        <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Legal</h3>
        <ul>
            <h1>Terms of Services</h1>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
        </ul>
        </div>
      
        <div className="py-2">
        <p className="text-center">&copy; 2025 Kerville Inc. All rights reserved.</p>
        </div>

      </footer>
    );
  }
  
  