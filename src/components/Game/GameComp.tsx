"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Game } from "@/types/game";
import { getAllGames } from "@/lib/game";
import BounceLoading from "@/components/Loading/BounceLoading";

export default function GameComp(props: any) {
  const { data, isLoading } = useQuery<Game[]>({
    queryKey: ["games"],
    queryFn: getAllGames,
    initialData: props.games,
  });

  if (isLoading || !data) return <BounceLoading />;

  return (
    <main className="flex flex-row items-start justify-start gap-4 p-24 text-white">
      {data.map((game) => {
        const createDate = new Date(game.createdAt);
        const updateDate = new Date(game.updatedAt);
        return (
          <Link
            href={`/game/${game.id}`}
            className="flex flex-col rounded-xl border border-blue-400 p-4 shadow-lg"
            key={game.id}
          >
            <div>id: {game.id}</div>
            <div>title: {game.title}</div>
            <div>createdAt: {createDate.toUTCString()}</div>
            <div>updatedAt: {updateDate.toUTCString()}</div>
          </Link>
        );
      })}
    </main>
  );
}
