import React from "react";
import CategoryItems from "./CategoryItems";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { categoryId } = useParams();
  return (
    <>
      <h1>{categoryId}</h1>
      <CategoryItems />
    </>
  );
};

export default Categories;
