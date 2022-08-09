import Head from "next/head";
import { createContext } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import useRideData from "../hooks/useRideData";

export const Data = createContext();
export default function Home() {
  const userData = {
    station_code: 10,
    name: "yaswanth_rahul",
    url: "assets/images/dp.jpg",
  };
  const {
    pages,
    view,
    handleView,
    isFilterOpen,
    setIsFilterOpen,
    isReady,
    pastRides,
    futureRides,
    rideData,
    byCity,
    byState,
    states,
    cities,
    handleFilterDataState,
    handleFilterDataCity,
    handleFilterReset,
    filterData,
    nearestRides,
  } = useRideData({ userData });
  return (
    <Data.Provider
      value={{
        pages,
        view,
        handleView,
        isFilterOpen,
        setIsFilterOpen,
        isReady,
        pastRides,
        futureRides,
        rideData,
        byCity,
        byState,
        states,
        cities,
        handleFilterDataState,
        handleFilterDataCity,
        handleFilterReset,
        filterData,
        nearestRides,
        userData,
      }}
    >
      <div className="flex flex-col items-center justify-start">
        <Head>
          <title>Edvora Desktop</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Main />
      </div>
    </Data.Provider>
  );
}
