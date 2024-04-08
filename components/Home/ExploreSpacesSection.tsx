import { mont } from "@/app/layout";
import { exploreSpaces } from "@/static/home";
import Image from "next/image";

export default function ExploreSpacesSection() {
  return (
    <section className="w-[95%] mx-auto flex flex-col gap-10">
      <h2 className="text-center text-5xl font-bold">Explore Spaces</h2>
      <div className="grid grid-cols-2 gap-8 grid-flow-row">
        {exploreSpaces.map((el) => (
          <div className="hover:scale-105 cursor-pointer transition-transform w-full rounded-3xl flex flex-col gap-4" key={el.id}>
            <div className="w-full aspect-video relative rounded-3xl overflow-hidden">
              <Image
                className="object-cover"
                fill
                src={el.image}
                alt={el.type}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-2xl tracking-wide">{el.type}</h4>
              <p className={`${mont.className} text-foreground-500 leading-5`}>{el.desciption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
