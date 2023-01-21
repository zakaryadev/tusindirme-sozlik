import React from "react";
import AddWord from "../../components/admin/components/AddWord";
import AdminWordsTable from "../../components/admin/components/AdminWordsTable";

const Words = () => {
  return (
    <React.Fragment>
      <AdminWordsTable />
      <AddWord />
    </React.Fragment>
  );
};

export default Words;
