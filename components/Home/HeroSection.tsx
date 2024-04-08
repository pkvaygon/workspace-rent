import { heroPeople } from "@/static/home";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section
        id="hero-section"
        className="my-4 h-screen w-[95%] rounded-3xl mx-auto herobg flex justify-start items-end overflow-hidden">
        <div className="h-auto w-full flex justify-between items-end">
          <div className="pl-6 pb-4 font-semibold text-white flex flex-col">
            <h1 className="text-6xl leading-relaxed">
              Work Better,
              <div className="flex gap-3 py-2 px-3 bg-white/40 max-w-max rounded-full">
                {heroPeople.map((el, i) => (
                  <div
                    className="w-10 h-10 relative border-1 border-white rounded-full "
                    key={i}>
                    <Image fill src={el} alt="hero team" />
                  </div>
                ))}
              </div>
              Together
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex gap-6">
                <Link
                  className="font-mont animate-pulse hover:animate-none py-3 px-8 bg-white text-black rounded-full"
                  href="#">
                  Book Now
                </Link>
                <Link
                  className="font-mont py-3 px-8 bg-transparent border-1 border-white rounded-full"
                  href="#">
                  Read More
                </Link>
              </div>
              <h4 className="text-pretty">
                An inspiring co-working environment designed for freelancers and
                teams to achieve greatness.
              </h4>
            </div>
          </div>
          <div className="w-[400px] flex py-4 px-6 bg-white/40 rounded-tl-3xl">
            <div className="bg-[#f4f4f4] flex flex-col gap-2 w-full h-full rounded-3xl p-4">
              <div className="flex justify-between items-start w-full">
                <p className="text-pretty w-4/5">
                  Our new location is finally open for public! Get ready for our
                  grand opening promotion.
                </p>
                <Link className="w-10 h-10 aspect-square relative" href="#">
                  <Image
                    fill
                    src="https://framerusercontent.com/images/SA3XQi9IC4izr5qvs0bUaSh1Q.svg"
                    alt="link"
                  />
                </Link>
              </div>
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden">
                <Image
                  fill
                  src="https://framerusercontent.com/images/hRCgm3dFA4MMmNbQBuOfnDeQI.jpg?scale-down-to=512"
                  alt="new place"
                />
                <span className="text-2xl max-w-28 font-semibold absolute left-0 bottom-0 p-2 bg-[#f4f4f4] rounded-tr-3xl">New Location</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    )


}