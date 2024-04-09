import { contactUsData } from "@/static/home";
import Image from "next/image";

export default function ContactUsSection() {
  return (
    <section className="flex flex-col gap-1 w-[95%] mx-auto">
      <h2 className="text-6xl font-bold w-[488px] ">Let’s Keep in Touch with Us!</h2>
      <p className="text-base text-foreground-500">
        Contact us today to explore the possibilities of our dynamic co-working
        space. Your ideal workspace is just a message or call away with us.
      </p>
      <div className="flex flex-col gap-2 mt-3">
        {contactUsData.map((el) => (
          <div key={el.id} className="flex justify-between items-center">
            <div className="w-4 h-4 relative">
              <Image fill src={el.image} alt={el.text} />
            </div>
            <text className="font-semibold text-lg">{el.text}</text>
          </div>
        ))}
      </div>
    </section>
  );
}
