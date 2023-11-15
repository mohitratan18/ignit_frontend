import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Admincrud from "./Admincrud";

const Admindashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("webtoken")) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center Meeting">
      <div className="bg-white h-[600px] w-[600px] flex  justify-center p-8">
        <Admincrud/>
      </div>
    </div>
  );
};

export default Admindashboard;
