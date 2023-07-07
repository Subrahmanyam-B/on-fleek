import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="border-animation p-[3px] bg-black">
      <div className="bg-black min-h-screen flex flex-col justify-between ">
        <Navbar />
        <div className="flex-1 w-full">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
