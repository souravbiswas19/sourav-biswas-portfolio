import Image from "next/image";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

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
          <div className="rounded-full overflow-hidden border-4 border-purple-500 w-36 h-36 md:w-44 md:h-44 mb-6 md:mb-0 md:mr-10">
            <Image
              src="/profile.jpg" // put your actual profile image in /public
              alt="Sourav Biswas"
              width={176}
              height={176}
              className="object-cover"
            />
          </div>

          {/* Intro text */}
          <div className="text-center md:text-left">
            <h1 className="text-white text-2xl md:text-4xl font-bold">
              Hi, I'm Sourav Biswas 👋
            </h1>
            <p className="text-white text-sm md:text-lg mt-2 max-w-xl">
              A passionate Computer Science Engineer turning ideas into visually captivating & technically sound user experiences.
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
