import Image from "next/image";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { Button } from './ui/MovingBorders';

const Grid = () => {
  return (
    <section id="about" className="relative w-full">
      {/* Banner Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src="/banner.jpg" // put your actual banner image in /public
          alt="Banner Image"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center bg-black/40 backdrop-blur-sm px-6">
            {/* Profile image */}
            <div className="animate-spin-slow p-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full w-[176px] h-[176px] md:w-[200px] md:h-[200px] flex items-center justify-center mb-6 md:mb-0 md:mr-10">
            <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="9999px"
                className="p-[3px] w-full h-full flex items-center justify-center text-white border-neutral-200 dark:border-slate-800"
                >
                <div className="rounded-full overflow-hidden w-full h-full">
                  <Image
                    src="/profile.jpg" // <-- Ensure the image exists in /public
                    alt="Profile"
                    width={160}
                    height={160}
                    className="rounded-full object-cover"
                  />
                </div>
              </Button>
            {/* <Image
              src="/profile.jpg" // put your actual profile image in /public
              alt="Sourav Biswas"
              width={176}
              height={176}
              className="object-cover"
            /> */}
          </div>

          {/* Intro text */}
          <div className="text-center md:text-left">
            <h1 className="text-white text-2xl md:text-4xl font-bold">
              Hi, I'm Sourav Biswas 👋
            </h1>
            <p className="text-white text-sm md:text-lg mt-2 max-w-xl">
              A curious mind in Computer Science, driven by research and innovation in AI/ML and Deep Learning — transforming complex ideas into impactful, real-world systems.
            </p>
          </div>
        </div>
      </div>

      {/* Bento Grid section (existing) */}
      <BentoGrid className="w-full py-20 px-5 md:px-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;