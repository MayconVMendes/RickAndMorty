import axios from "axios";

export function useApiCharacter() {
  const searchApi = async () => {
    let url = "https://rickandmortyapi.com/api/character";

    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    searchApi,
  };
}
