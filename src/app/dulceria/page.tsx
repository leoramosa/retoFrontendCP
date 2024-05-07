import React from "react";
import Link from "next/link";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const Dulceria = () => {
  const fetchDataCandystore = async () => {
    try {
      const response = await fetch(
        "https://cp-staging.onrender.com/v1/candystore"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderCandystore = async () => {
    const candyData = await fetchDataCandystore();
    return (
      <>
        <div className="mx-auto max-w-[1440px] gap-5 grid grid-cols-4 grid-rows-2 px-8">
          {candyData?.items?.map((item, index) => (
            <Card shadow="sm" key={index} isPressable>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt=""
                  className="w-full object-cover h-[240px] bg-blue-400"
                  src="/images/confiteria.png"
                />
              </CardBody>
              <CardFooter className="text-small block">
                <div className="text-left">
                  <p>{item.description}</p>
                </div>
                <div className="flex justify-between">
                  <b>{item.name}</b>
                  <p className="text-default-500">S/.{item.price}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </>
    );
  };

  <ul></ul>;

  return (
    <div>
      <h1>dul</h1>
      {renderCandystore()}
    </div>
  );
};

export default Dulceria;
