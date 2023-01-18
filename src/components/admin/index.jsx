import React from "react";
import Aside from "./Aside";
import Main from "./Main";
import "./_admin.scss";
const AdminPanel = () => {
  return (
    <section className="admin">
      <Aside />
      <Main />
    </section>
  );
};

export default AdminPanel;
