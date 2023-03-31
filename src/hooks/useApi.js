import axios from "axios";

export function useApi() {
  const searchApi = async () => {
    let url = "https://rickandmortyapi.com/api/";

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
