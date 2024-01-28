import { host } from "@/constants";
import axios from "axios";

export async function FetchPizza() {
  const res = axios.get(`${host}/pizzas`).then((res) => res.data);

  return res;
}
export async function FetchFullPagePizza(id: string) {
  const res = axios.get(`${host}/pizzas/${id}`).then((res) => res.data);

  return res;
}
