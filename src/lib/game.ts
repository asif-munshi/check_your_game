import axios from "axios";
import { Game } from "@/types/game";

const gameApi = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getAllGames = (): Promise<Game[]> =>
  gameApi.get("/game").then((res) => res.data);
