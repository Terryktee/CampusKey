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
          <li><a href="/team">Team</a></li>
          <li><a href="/how-it-works">How it works</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </div>
      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Resources</h3>
        <ul>
          <li><a href="/help-center">Help Center</a></li>
          <li><a href="/student-guide">Student Guide</a></li>
        </ul>
      </div>
      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Legal</h3>
        <ul>
          <li><a href="/terms">Terms of Services</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/disclaimer">Disclaimer</a></li>
        </ul>
      </div>

      <div className="py-2">
        <p className="text-center">&copy; 2025 Kerville Inc. All rights reserved.</p>
      </div>

    </footer>
  );
}

