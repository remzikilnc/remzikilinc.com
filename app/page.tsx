import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
    return (
        <main className="h-full w-full bg-no-repeat">
            <div className="flex flex-col gap-20">
                <Banner/>
                <About/>
                {/*  <Experience />*/}
                <TechStack/>
                <Projects/>
                <Footer/>
            </div>
        </main>
    );
}
