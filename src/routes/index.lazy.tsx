import * as React from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Todos from "../components/Todos";
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
  return (
    <div className="p-2">
      <Todos />
    </div>
  );
}
