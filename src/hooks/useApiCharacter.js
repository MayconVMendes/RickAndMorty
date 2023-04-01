import axios from "axios";

export function useApiCharacter() {
  const searchApi = async (url) => {
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
