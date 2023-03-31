import React, { useEffect, useState } from "react";
import { useApiCharacter } from "../../hooks/useApiCharacter";
import "./characters.scss";

export default function Characters() {
  const { searchApi } = useApiCharacter();
  const [data, setData] = useState(null);
  const [block, setBlock] = useState(false);

  useEffect(() => {
    if (block === false) {
      const search = async () => {
        const result = await searchApi();
        setData(result);
      };
      search();
      setBlock(true);
    }
  }, [block, searchApi]);

  return (
    <section>
      <div className="containerDad">
        {data?.results.map((rick) => {
          return (
            <div className="box" key={rick.id}>
              <div className="card">
                <div className="boxImg">
                  <img src={rick.image} alt="Rick And Morty" />
                </div>
                <span className="texts">
                  Nome: <p>{rick.name}</p>
                </span>
                <span className="texts">
                  Status: <p>{rick.status}</p>
                </span>
                <span className="texts">
                  Especie: <p>{rick.species}</p>
                </span>
                <span className="texts">
                  Sexo: <p>{rick.gender}</p>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
