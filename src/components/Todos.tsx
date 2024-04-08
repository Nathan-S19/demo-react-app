import React from "react";
import { useTodosIds } from "../services/queries";

export default function Todos() {
  const todosIdsQuery = useTodosIds();

  if (todosIdsQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (todosIdsQuery.isError) {
    return <p>Error: </p>;
  }

  return (
    <div>
      {todosIdsQuery.data.map((id) => (
        <div key={id}>{id}</div>
      ))}
    </div>
  );
}
