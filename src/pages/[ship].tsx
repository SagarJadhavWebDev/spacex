import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
interface ShipDetailsProps {}
const GET_SHIP_DETAILS = gql`
  query Ship($shipId: ID!) {
    ship(id: $shipId) {
      id
      name
      type
      home_port
      image
      active
      roles
      missions {
        name
        flight
      }
    }
  }
`;

const ShipDetails: React.FC<ShipDetailsProps> = ({}) => {
  const router = useRouter();
  const shipId = router?.query?.ship;
  const { loading, error, data } = useQuery(GET_SHIP_DETAILS, {
    variables: { shipId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { ship } = data;

  return (
    <div className="flex w-full h-full justify-center items-center px-10 py-10">
      <div className="w-full mb-0">
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
            {ship?.roles}
          </h2>
          <p className="leading-relaxed text-base">{ship?.roles}</p>
        </div>
      </div>
    </div>
  );
};

export default ShipDetails;
