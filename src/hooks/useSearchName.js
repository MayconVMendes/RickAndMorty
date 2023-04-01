import axios from "axios";

export function useSearchName() {
  const searchName = async (consulta) => {
    let url = `https://rickandmortyapi.com/api/character/?name=${consulta}`;

    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    searchName,
  };
}
