import * as React from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import axios from "axios";
type DataType = {
  checked: boolean;
  title: string;
  description: string;
  id: number;
};

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <p className="font-bold mb-4">Todos</p>
      <ul>{JSON.stringify(data)}</ul>
    </div>
  );
}
