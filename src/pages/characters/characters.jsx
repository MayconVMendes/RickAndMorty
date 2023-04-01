import React, { useEffect, useState } from "react";
import { useApiCharacter } from "../../hooks/useApiCharacter";
import { useSelector } from "react-redux";
import "./characters.scss";

export default function Characters() {
  const { searchApi } = useApiCharacter();
  const [data, setData] = useState(null);
  const [block, setBlock] = useState(false);
  const [isSearch, setisSearch] = useState(false);
  const state = useSelector((state) => state?.search);

  useEffect(() => {
    if (block === false) {
      const search = async () => {
        const result = await searchApi();
        setData(result);
      };
      search();
      setBlock(true);
    }

    if (state.isResult) {
      setisSearch(true);
    }
  }, [block, searchApi, state]);

  return (
    <section>
      <div className="containerDad">
        {isSearch ? (
          <>
            {state?.result.map((rick) => {
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
          </>
        ) : (
          <>
            {" "}
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
          </>
        )}
      </div>
    </section>
  );
}
