import React from "react";
import UserList from "../../components/util/UserList";
import Sidebar from "../../components/nav/SideBar";

const AdminPanel = () => {
  return (
    <div className="flex">
      <Sidebar />
      <UserList />
    </div>
  );
};

export default AdminPanel;
