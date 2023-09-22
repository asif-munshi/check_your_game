"use client";

import { useQuery } from "@tanstack/react-query";
import { Game } from "@/types/game";
import { getAllGames } from "@/lib/game";
import BounceLoading from "@/components/Loading/BounceLoading";

export default function Home() {
  const { data, isLoading } = useQuery<Game[]>({
    queryKey: ["games"],
    queryFn: getAllGames,
  });

  if (isLoading || !data) return <BounceLoading />;

  return (
    <main className="flex h-screen flex-col items-center gap-4 p-24 text-white">
      {data.map((todo) => {
        const createDate = new Date(todo.createdAt);
        const updateDate = new Date(todo.updatedAt);
        return (
          <div
            className="flex flex-col rounded-xl border border-blue-400 p-4 shadow-lg"
            key={todo.id}
          >
            <div>id: {todo.id}</div>
            <div>title: {todo.title}</div>
            <div>createdAt: {createDate.toUTCString()}</div>
            <div>updatedAt: {updateDate.toUTCString()}</div>
          </div>
        );
      })}
    </main>
  );
}
