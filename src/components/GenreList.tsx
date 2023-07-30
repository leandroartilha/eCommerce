import { useEffect, useState } from "react";
import apiClient from "../api-client";
import Genero from "../interfaces/genre";

interface ListaGeneros {
  results: Genero[];
}

const GenreList = () => {
  const [generos, setGenero] = useState<Genero[]>([]);

  useEffect(() => {
    apiClient.get<ListaGeneros>("/genres").then((res) => {
      setGenero(res.data.results);
      console.log(res.data.results);
    });
  }, []);

  return (
    <>
      <ul>
        {generos.map((genero) => (
          <li>{genero.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
