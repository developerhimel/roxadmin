import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const history = useNavigate();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("user");
      if (data !== null) {
        history("/");
      } else if (data === null) {
        history("/login");
      }
    }
  }, []);
  return (
    <div>
      <Sidebar active="dashboard" />
    </div>
  );
}

export default Dashboard;
