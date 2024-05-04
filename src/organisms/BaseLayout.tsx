import rouets from "@/constants/routes";
import SearchBar from "@/molecules/SearchBar";
import { useRouter } from "next/router";

interface BaseLayoutProps {
  children: any;
}
const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col    md:px-10 mx-auto md:items-center md:flex-row  lg:px-8">
        <div className=" w-screen p-2  justify-between  md:justify-between  flex items-center    ">
          <a className="cursor-pointer">
            <img
              className="rounded-full   w-12  md:block duration-500 hover:ease-in-out transform hover:scale-110 shadow-2xl text-white bg-indigo-500  focus:outline-none hover:outline-none"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM366aZxyw9DktqZ4W6IMQR4oDYxTT08HwFolzynmqjg&s"
            />
          </a>
          <a
            href={rouets.home}
            className="md:ml-3 duration-500 hover:ease-in-out transform hover:scale-110 shadow-2xl text-xl font-bold cursor-pointer"
          >
            SpaceX
          </a>

          <div className="flex md:w-96   items-center gap-10">
            <SearchBar />

            <button className="duration-500 hover:ease-in-out transform hover:scale-110  rounded-lg bg-white border-2 border-gray-500 h-12 p-3 w-12 shadow-2xl rounded-xl shadow-2xl focus:outline-none focus:shadow-outline focus:outline-none hover:outline-none">
              <svg
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};
export default BaseLayout;
