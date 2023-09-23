"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getGameById } from "@/lib/game";
import { Game } from "@/types/game";
import BounceLoading from "@/components/Loading/BounceLoading";

export default function Game() {
  const params = useParams();
  const { id } = params;
  const paramsID = id;

  const { data, isLoading } = useQuery<Game[]>({
    queryKey: ["game"],
    queryFn: () => getGameById(paramsID),
  });

  if (isLoading || !data) return <BounceLoading />;

  const createDate = new Date(data.createdAt);
  const updateDate = new Date(data.updatedAt);

  return (
    <main className="flex h-full flex-col items-center justify-start gap-8 p-12 text-white">
      <div className="flex flex-col rounded-xl border border-blue-400 p-4 shadow-lg">
        <div>id: {data.id}</div>
        <div>title: {data.title}</div>
        <div>createdAt: {createDate.toLocaleDateString()}</div>
        <div>createdAt: {updateDate.toLocaleDateString()}</div>
      </div>
    </main>
  );
}
