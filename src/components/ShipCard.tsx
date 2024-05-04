import { Ship } from "@/types/ShipsType";
import router from "next/router";

interface ShipCardProps {
  ship: Ship;
}
const ShipCard: React.FC<ShipCardProps> = ({ ship }) => {
  return (
    <div
      onClick={() => {
        router.push(ship?.id);
      }}
      key={ship?.id}
      className="xl:w-1/3 md:w-1/2 p-4 w-full mb-0    cursor-pointer"
    >
      <div className="border border-gray-200 p-6 rounded-lg duration-75 hover:ease-in-out transform  hover:border-green-500 ">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4">
          <img
            src={
              ship?.image ??
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM366aZxyw9DktqZ4W6IMQR4oDYxTT08HwFolzynmqjg&s"
            }
            className="w-16 h-16 border-[1px] shadow-xl border-gray-300 rounded-full object-cover "
          />
        </div>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
          {ship?.type}
        </h2>
        <p className="leading-relaxed text-base">{ship?.name}</p>
      </div>
    </div>
  );
};

export default ShipCard;
