import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { homeBanner } from "@/static/home";
import Image from "next/image";

export default function HomeBannerSection() {
  return (
    <Carousel className="w-full mx-auto bg-red-400/50">
      <CarouselContent>
              {
                  homeBanner.map((el) => (
                      <CarouselItem className="relative h-[400px] flex items-end" key={el.id}>
                          <div className="w-full h-full relative">
                              <Image className="object-cover" fill src={el.image } alt={el.title} />
                          </div>
                          <h6 className="text-5xl text-pretty absolute top-10 left-10 w-3/5 text-white font-semibold">{el.text}</h6>
                          <div className="absolute bottom-0 left-0 flex flex-col gap-2 pl-10 py-2 pr-4 bg-white rounded-tr-3xl">
                              <span className="text-2xl font-semibold">{el.title}</span>
                              <span className="text-base text-foreground-500 tracking-wider">{el.subtitle} (2023-2024)</span>
                          </div>
                  </CarouselItem>
                      
              ))
              }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
