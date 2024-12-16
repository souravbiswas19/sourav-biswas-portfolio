import Image from "next/image";
import Hero from "@/components/Hero"
import { FloatingNav } from "@/components/ui/FloatingNav";
import { link } from "fs";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative bg-black-100">
      <div>
        <FloatingNav navItems={[{name:"Home",link:"/",icon:<FaHome></FaHome>}]} />
        <Hero/>
        <Grid/>
        <RecentProjects/>
      </div>
    </main>
  );
}

