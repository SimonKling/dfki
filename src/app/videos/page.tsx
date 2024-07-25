import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navbar";
import Videoplayer from "@/components/ui/videoplayer";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="text-4xl font-semibold text-white mt-[100px] md:px-8 px-2 text-left">
        Videos
      </div>
      <div className="bg-ki-main flex flex-col  justify-between min-h-screen ">
        <Videoplayer />
        <Footer />
      </div>
    </>
  );
}
