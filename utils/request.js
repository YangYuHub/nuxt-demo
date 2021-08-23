// 基于axios分装的请求模块
import axios from "axios";

const reauest = axios.create({
  baseURL: "https://conduit.productionready.io",
});

export default reauest;
