import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserService from "../services/user.service";
import NewFeed from "./NewFeed";
const Home = () => {
  const [content, setContent] = useState("");
  
  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(NewFeed);
      },
      (error) => {
        const _content = "Vui lòng đăng nhập để sử dụng";
        setContent(_content);
      }
    );
  }, []);
  return (
    <div className="form-floating mb-3">
      {content}
    </div>
  );
};
export default Home;