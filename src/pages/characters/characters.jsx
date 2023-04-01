import React, { useEffect, useState } from "react";
import { useApiCharacter } from "../../hooks/useApiCharacter";
import { useSelector } from "react-redux";
import "./characters.scss";

export default function Characters() {
  const { searchApi } = useApiCharacter();
  const [data, setData] = useState(null);
  const [block, setBlock] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isButtonPrev, setIsButtonPrev] = useState(null);
  const [isButtonNext, setIsButtonNext] = useState(null);
  const state = useSelector((state) => state?.search);

  useEffect(() => {
    if (block === false) {
      const search = async () => {
        const result = await searchApi(
          "https://rickandmortyapi.com/api/character"
        );
        setData(result);
      };
      search();
      setBlock(true);
    }

    if (state.isResult) {
      setIsSearch(true);
    }

    if (data?.info?.prev == null) {
      setIsButtonPrev(true);
    } else {
      setIsButtonPrev(false);
    }

    if (data?.info?.next == null) {
      setIsButtonNext(true);
    } else {
      setIsButtonNext(false);
    }
  }, [block, searchApi, state, data]);

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
      <div className="buttons">
        <button
          onClick={() => {
            if (data?.info?.prev) {
              const search = async () => {
                const result = await searchApi(data?.info?.prev);
                setData(result);
              };
              search();
            }
          }}
          className={isButtonPrev ? "disable" : ""}
          disabled={isButtonPrev}
        >
          Voltar
        </button>

        <button
          onClick={() => {
            if (data?.info?.next) {
              const search = async () => {
                const result = await searchApi(data?.info?.next);
                setData(result);
              };
              search();
            }
          }}
          className={isButtonNext ? "disable" : ""}
          disabled={isButtonNext}
        >
          Avançar
        </button>
      </div>
    </section>
  );
}
