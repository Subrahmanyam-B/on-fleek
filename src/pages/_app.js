import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="border-animation p-[3px] relative bg-black">
      <span className="top hidden"></span>
      <span className="right hidden"></span>
      <span className="bottom hidden"></span>
      <span className="left hidden"></span>
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
