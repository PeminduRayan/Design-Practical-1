import { Carousel, Datepicker } from "flowbite-react";
import RoomSelection from "../RoomSelection";
import CaroLowerPart from "./CaroLowerPart";

export default function Component() {
  return (
    <div className="h-[500px] w-full rounded-none">
      <Carousel>
        <div className="flex flex-col h-full items-center justify-center bg-caro1 bg-cover">
          <div className="-mt-8">
            <span className="text-white justify-center text-center space-y-4 ">
              <h1 className="text-3xl font-bold font-serif">
                Shangri-La Colombo
              </h1>
              <h1 className="text-xl font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                voluptatem ullam dolores?
              </h1>
            </span>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-caro2 bg-cover">
          <span className="text-white justify-center text-center space-y-4 ">
            <h1 className="text-3xl font-bold font-serif">
              Shangri-La Colombo
            </h1>
            <h1 className="text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              voluptatem ullam dolores?
            </h1>
          </span>
        </div>
        <div className="flex h-full items-center justify-center bg-caro3 bg-cover">
          <span className="text-white justify-center text-center space-y-4 ">
            <h1 className="text-3xl font-bold font-serif">
              Shangri-La Colombo
            </h1>
            <h1 className="text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              voluptatem ullam dolores?
            </h1>
          </span>
        </div>
        <div className="flex h-full items-center justify-center bg-caro4 bg-cover">
          <span className="text-white justify-center text-center space-y-4 ">
            <h1 className="text-3xl font-bold font-serif">
              Shangri-La Colombo
            </h1>
            <h1 className="text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              voluptatem ullam dolores?
            </h1>
          </span>
        </div>
      </Carousel>
      <CaroLowerPart />
    </div>
  );
}
