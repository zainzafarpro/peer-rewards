import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import NewReward from "./NewReward";
import { useContext } from "react";
import { RewardContext } from "@/context/RewardContext";

const Body = () => {
  const { state, dispatch } = useContext(RewardContext);
  function filterMyReward(e) {
    e.preventDefault();
    dispatch({ type: "FILTERMINE" });
  }
  function showFeed(e) {
    e.preventDefault();
    dispatch({ type: "SHOWFEED" });
  }
  return (
    <div>
      <div className="flex items-center">
        <Button
          onClick={showFeed}
          variant="link"
          className={`text-xl pb-3 border-b-transparent border-b-4 hover:text-purple-600 hover:no-underline hover:border-b-purple-600 rounded-none px-2 ${
            state.isFeed
              ? "text-purple-600 no-underline border-b-purple-600"
              : ""
          }`}
        >
          Feed
        </Button>
        <Button
          onClick={filterMyReward}
          variant="link"
          className={`text-xl pb-3 border-b-transparent border-b-4 hover:text-purple-600 hover:no-underline hover:border-b-purple-600 rounded-none px-2 ${
            state.isMyRewards
              ? "text-purple-600 no-underline border-b-purple-600"
              : ""
          }`}
        >
          My Rewards
        </Button>
      </div>
      <div className="bg-gray-200 min-h-dvh border-t-4 border-gray-500 flex items-start">
        <ul className="grow">
          {!state.isMyRewards ? (
            state?.feed?.map((item, i) => (
              <li className="flex p-4 mb-4" key={i}>
                <div>
                  <div className="size-20 place-items-center content-center rounded-full bg-gray-300 text-gray-500 mx-auto">
                    <User className="size-8" />
                  </div>
                </div>
                <div className="pl-4">
                  <span className="block text-sm">
                    {item.rewardConsumer} rewarded by {item.rewardGiver}
                  </span>
                  <span className="block text-xs mb-3">{item.time}</span>
                  <p className="text-lg">{item.text}</p>
                </div>
              </li>
            ))
          ) : state?.filteredFeed?.length > 0 ? (
            state.filteredFeed.map((item, i) => (
              <li className="flex p-4 mb-4" key={i}>
                <div>
                  <div className="size-20 place-items-center content-center rounded-full bg-gray-300 text-gray-500 mx-auto">
                    <User className="size-8" />
                  </div>
                </div>
                <div className="pl-4">
                  <span className="block text-sm">
                    {item.rewardConsumer} rewarded by {item.rewardGiver}
                  </span>
                  <span className="block text-xs mb-3">{item.time}</span>
                  <p className="text-lg">{item.text}</p>
                </div>
              </li>
            ))
          ) : (
            <li className="flex p-4 mb-4 text-gray-500 text-center">
              No rewards to display
            </li>
          )}
        </ul>

        <div className="-mt-7 mr-5">
          <NewReward />
        </div>
      </div>
    </div>
  );
};

export default Body;
