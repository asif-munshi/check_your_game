import GameComp from "@/components/Game/GameComp";
import { getAllGames } from "@/lib/game";

export default async function Discover() {
  const initialData = await getAllGames();

  return (
    <div className="flex h-screen w-full justify-center text-white">
      <div className="w-9/12">
        <GameComp games={initialData} />
      </div>
    </div>
  );
}
