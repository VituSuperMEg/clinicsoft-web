import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

async function getData(endPoit : string) {
  const { data } = await api.get<[]>(`${endPoit}/`);
  return data;
}
export function useLoadData(endPoint : string) {
  return useQuery({
    queryKey: ["data", { endPoint }],
    queryFn :() => getData(endPoint)
  });
}
