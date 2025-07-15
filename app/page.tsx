import Image from "next/image";
import Hero from "@/components/Hero"
import { FloatingNav } from "@/components/ui/FloatingNav";
import { link } from "fs";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import ResumeDownload from "@/components/ResumeDownload";
import SkillConstellation3D from "@/components/SkillConstellation3D";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div>
        <FloatingNav navItems={navItems} />
        <Hero/>
        <Grid/>
        <Education/>
        <Skills/>
        {/* <SkillConstellation3D/> */}
        <Experience/>
        <RecentProjects/>
        <Publications/>
        <ResumeDownload/>
        <Footer/>
      </div>
    </main>
  );
}

