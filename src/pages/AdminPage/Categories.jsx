import React from "react";
import AddCategory from "../../components/admin/components/AddCategory";
import CategoriesList from "../../components/admin/components/CategoriesList";

const Categories = () => {
  return (
    <React.Fragment>
      <CategoriesList />
      <AddCategory />
    </React.Fragment>
  );
};

export default Categories;
