import { Button } from "@nextui-org/button";

export default function Footer() {
  return (
    <div className="w-[95%] mx-auto h-[400px] footerbg rounded-3xl p-8 mb-4">
      <div
        className="flex w-full h-full flex-col gap-2 justify-end items-start">
        <h3 className="text-white text-4xl shadow-2xl font-medium">
          NewsLetter
        </h3>
        <div className="flex justify-between items-center gap-2 w-full">
          <input
            className="w-4/5 p-2 rounded-md font-semibold tracking-wider"
            type="email"
            placeholder="example@gmail.com"
          />
                  <Button
                      variant="solid"
            className="w-1/5 text-lg p-2 rounded-large text-white bg-black"
            type="submit">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
