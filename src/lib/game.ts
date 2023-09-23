import axios from "axios";
import { Game } from "@/types/game";

const gameApi = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getAllGames = (): Promise<Game[]> =>
  gameApi.get("/game").then((res) => res.data);

export const getGameById = (id: any): Promise<Game[]> =>
  gameApi.get(`/game/${id}`).then((res) => res.data);

export const addTodo = (values: any): Promise<Game[]> =>
  gameApi.post("/todos", values).then((res) => res.data);

export const updatetodo = ({
  id,
  values,
}: {
  id: string;
  values: any;
}): Promise<Game[]> =>
  gameApi.put(`/todos/${id}`, values).then((res) => res.data);

export const deleteTodo = (id: number): Promise<void> =>
  gameApi.delete(`/todos/${id}`).then((res) => res.data);
