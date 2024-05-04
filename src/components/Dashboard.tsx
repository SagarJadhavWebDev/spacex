"use client";
import Loader from "@/organisms/Loader";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import ShipCard from "./ShipCard";
import { Ship, Ships, Shipsdata } from "@/types/ShipsType";
interface DashboardProps {
  limit: number;
  offset: number;
  sort: string;
  filter: any;
}
const LAUNCHES_QUERY = gql`
  query Ships($limit: Int!, $offset: Int!, $sort: String) {
    ships(limit: $limit, offset: $offset, sort: $sort) {
      id
      model
      name
      type
      status
      image
      successful_landings
      class
      year_built
      active
      attempted_landings
      home_port
      abs
      imo
      missions {
        flight
      }
      url
      speed_kn
      roles
    }
  }
`;

const Dashboard: React.FC<DashboardProps> = ({
  limit = 12,
  offset = 0,
  sort = "ASC",
  filter = null,
}) => {
  const { loading, error, data, fetchMore } = useQuery(LAUNCHES_QUERY, {
    variables: { limit, offset, sort, filter },
  });
  const router = useRouter();
  const PaginationDivref = useRef<HTMLDivElement>(null);
  const loadMoreShips = () => {
    fetchMore({
      variables: {
        offset: data?.ships?.length ?? 0, // Offset by the number of items already loaded
        limit,
        sort: null, // You may adjust sorting if needed
        filter: null, // You may adjust filtering if needed
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          ships: [...(prev?.ships ?? []), ...fetchMoreResult.ships],
        };
      },
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreShips();
      }
    });

    if (PaginationDivref?.current) {
      observer.observe(PaginationDivref?.current);
    }

    return () => observer.disconnect();
  }, [PaginationDivref?.current]);
  console.log("data", data);
  const ships: Ship[] = data?.ships?.filter((ship: any) =>
    ship?.type
      ?.toLowerCase()
      ?.includes(router?.query?.search?.toString()?.toLowerCase() ?? "")
  );
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div
        className={`bg-white h p-0 m-0 flex  gap-0 flex-wrap   items-center ${
          loading ? "flex justify-center mt-5 items-center" : ""
        }`}
      >
        {ships &&
          ships?.map((ship) => {
            return <ShipCard ship={ship} />;
          })}

        {loading ? <Loader /> : null}
        <div ref={PaginationDivref} className="mb-10" />
      </div>
    </>
  );
};

export default Dashboard;
