// import { partners } from "@/static/home";
// import { ScrollShadow } from "@nextui-org/scroll-shadow";
// import Image from "next/image";

// export default function ScrollingBanner() {
//   return (
//     <ScrollShadow
//       hideScrollBar
//       orientation="horizontal"
//       isEnabled
//       size={300}
//       visibility="both"
//       offset={-20}
//       className="w-full h-[80px] flex justify-start items-center bg-red-400"
//       style={{
//         // @ts-ignore
//         "--gap": "100px",
//         "--duration": `${20}s`,
//       }}>
//       <div className="flex animate-scrolling-banner w-max items-stretch gap-[--gap]">
//         {partners.map((stack) => (
//           <div className="flex justify-start items-center gap-2" key={stack.id}>
//             <Image
//               width={60}
//               height={60}
//               src={stack.image}
//               alt={stack.label}
//               className="object-contain object-center"
//             />
//             <span>{stack.label}</span>
//           </div>
//         ))}
//       </div>
//     </ScrollShadow>
//   );
// }