"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./dogs.module.css";

function Dog(props) {
  const [berry, setBerry] = useState(null);
  const berryUrl = "https://pokeapi.co/api/v2/berry/cheri/";
  

  const obtenerInformacionBaya = () => {
    fetch(berryUrl)
      .then((res) => res.json())
      .then((data) => {
        setBerry(data);
      })
      .catch((error) => {
        console.error("Error al obtener información de la baya:", error);
      });
  };

  useEffect(() => {
    obtenerInformacionBaya();
  }, []);

  return (
    <div className={style.box1}>
      <div className={style.box}>
        <h1>My Pokemon</h1>
        {berry ? (
          <div className={style.berryInfo}>
            <h2>{berry.name}</h2>

            
            <div className={style.imageContainer}>
              <Image
                src={`/images/${berry.name}.png`}
                alt={berry.name}
                width={500}
                height={500}
              />
            </div>
            <h3> About </h3>
            <p>ID: {berry.id}</p>
            <p>Tiempo de Crecimiento: {berry.growth_time}</p>
            <p>Max Harvest: {berry.max_harvest}</p>
            <p>Poder de Regalo Natural: {berry.natural_gift_power}</p>
            <h3> stats </h3>
            <p> {berry.max_harvest}</p>
            
            
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Dog;