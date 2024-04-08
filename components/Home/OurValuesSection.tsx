import { mont } from "@/app/layout";
import { ourValues } from "@/static/home";
import Image from "next/image";
import Link from "next/link";

export default function OurValuesSection() {
    return <section className="w-[95%] gap-4 flex flex-col mx-auto rounded-3xl p-6 bg-[#f4f4f4]">
        <div className="flex justify-between items-end p-4">
            <h1 className="text-5xl font-semibold">Our Values</h1>
            <Link className="text-sm tracking-wider font-mont font-bold text-foreground-500" href="#">See Our Spaces</Link>
        </div>
        <div className="grid grid-cols-2 gap-4 grid-rows-2">
            {
                ourValues.map((el) => (
                    <div key={el.id} className="flex flex-col gap-4 px-4 py-10 rounded-3xl border-1 border-black/30">
                        <div className="w-8 h-8 relative">
                        <Image fill src={el.icon} alt={el.title} />
                        </div>
                        <h3 className={`text-2xl font-semibold leading-9`}>{el.title}</h3>
                        <h4 className={`${mont.className} text-base font-normal text-foreground-500`}>{el.text}</h4>
                </div>

            ))
            }
        </div>
  </section>;
}
