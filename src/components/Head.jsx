import { RewardContext } from "@/context/RewardContext";
import { User } from "lucide-react";
import { useContext } from "react";

const Head = () => {
  const { state } = useContext(RewardContext);
  return (
    <div className="flex items-center mb-9">
      <div className="w-24 text-center me-12">
        <div className="size-20 place-items-center content-center rounded-full bg-gray-300 text-gray-500 mb-4 mx-auto">
          <User className="size-8" />
        </div>
        <span className="text-lg">{state.userName}</span>
      </div>
      <div className="w-1/4">
        <span className="w-full block text-lg">My Reward</span>
        <strong className="text-xl">{state.currency + state.myRewards}</strong>
      </div>
      <div className="w-1/4">
        <span className="w-full block text-lg">Give</span>
        <strong className="text-xl">
          {state.currency + state.giveRewards}
        </strong>
      </div>
    </div>
  );
};

export default Head;
