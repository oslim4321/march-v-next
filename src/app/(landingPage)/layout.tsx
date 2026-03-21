import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-gray-50">
     <Navbar/>
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <div>
          {children}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default LandingPageLayout;
