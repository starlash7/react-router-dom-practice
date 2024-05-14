import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Admin = () => {
  const { password } = useParams();

  const navigae = useNavigate();

  useEffect(() => {
    if (password !== "1234") {
      navigate("/");
    }
  }, []);

  return (
    <div className="bg-blue-100 min-h-screen flex justify-center items-center">
      Adim
    </div>
  );
};

export default Admin;
