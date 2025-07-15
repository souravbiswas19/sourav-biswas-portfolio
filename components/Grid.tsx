import Image from "next/image";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { Button } from "./ui/MovingBorders";
import { ColourfulText } from "./ui/colourful-text";

const Grid = () => {
  return (
    <section id="about" className="relative w-full">
      {/* Banner Section */}
      <div className="relative w-full h-[70vh] md:h-[80vh]">
        <Image
          src="/banner.jpg"
          alt="Banner Image"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center bg-black/40 backdrop-blur-sm px-4 sm:px-6">
          {/* Profile image */}
          <div className="animate-spin-slow p-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] flex items-center justify-center mb-4 md:mb-0 md:mr-10">
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="9999px"
              className="p-[3px] w-full h-full flex items-center justify-center text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="rounded-full overflow-hidden w-full h-full">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={160}
                  height={160}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </Button>
          </div>

          {/* Intro text */}
          <div className="text-center md:text-left max-w-md">
            <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold">
              Hi, I'm <ColourfulText text="Sourav Biswas" /> 👋
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg mt-2 max-w-xl leading-relaxed">
              A curious mind in Computer Science, driven by research and innovation in AI/ML and Deep Learning — transforming complex ideas into impactful, real-world systems.
            </p>
          </div>
        </div>
      </div>

      {/* Bento Grid section */}
      <BentoGrid className="w-full py-16 px-4 sm:px-6 md:px-20">
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
