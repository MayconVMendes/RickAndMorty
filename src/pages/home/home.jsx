import React, { useState } from "react";
import { useApi } from "../../hooks/useApi";
export default function Home() {
  const { searchApi } = useApi();
  const [data, setData] = useState(null);

  const search = async () => {
    const result = await searchApi();
    setData(result);
  };

  search();

  return <div>Home aqui</div>;
}
