import axios from "axios";

export default axios.create({
  // baseURL:将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
  // `url` 是用于请求的服务器 URL,也是config的参数
  baseURL: "http://localhost:8080",
  //  `headers` 是即将被发送的自定义请求头
  headers: {
    "Content-type": "application/json"
  }
});