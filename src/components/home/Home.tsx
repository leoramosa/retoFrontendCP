import React from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export const Home = () => {
  const router = useRouter();

  const handleBuyClick = () => {
    // Redirigir a la página de inicio de sesión cuando se hace clic en "Comprar"
    router.push("/login");
  };
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cp-staging.onrender.com/v1/premieres"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data); // Esto imprimirá los datos en la consola
      return data; // Retorna los datos obtenidos
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderPremieres = async () => {
    const premieresData = await fetchData();
    return (
      <>
        <div className="mx-auto max-w-[1440px] gap-5 grid grid-cols-12 grid-rows-6 px-8">
          {premieresData?.premieres?.map((premiere, index) => (
            <Card
              key={index}
              isFooterBlurred
              className="col-span-12 sm:col-span-3 h-[500px]"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold"></p>
                <h4 className="text-black font-medium text-2xl"></h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={premiere.image}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-tiny">{premiere.description}</p>
                </div>
                <Button
                  className="text-tiny"
                  color="primary"
                  radius="full"
                  size="sm"
                  onClick={handleBuyClick}
                >
                  Comprar
                </Button>
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
      <h1>Descripciones de las Premieres:</h1>
      {renderPremieres()}
    </div>
  );
};
