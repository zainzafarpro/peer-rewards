import { createContext, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const updatedFeed = [
        ...state.feed,
        {
          rewardGiver: state.userName,
          rewardConsumer: action.to,
          time: action.time,
          text: action.why,
          myReward: action.myReward,
        },
      ];

      const updatedFilteredFeed = updatedFeed.filter(
        (reward) => reward.myReward === true
      );
      return {
        ...state,
        feed: updatedFeed,
        filteredFeed: updatedFilteredFeed,
      };
    }

    case "FILTERMINE": {
      const filteredFeed = state?.feed?.filter(
        (reward) => reward.myReward === true
      );
      return {
        ...state,
        isFeed: false,
        isMyRewards: true,
        filteredFeed,
      };
    }
    case "SHOWFEED":
      return {
        ...state,
        isFeed: true,
        isMyRewards: false,
      };
    default:
      return state;
  }
}

const initialValues = {
  isFeed: true,
  isMyRewards: false,
  userName: "Jane Doe",
  currency: "$",
  myRewards: 250,
  giveRewards: 100,
  feed: [
    {
      rewardGiver: "john chen",
      rewardConsumer: "David Greene",
      time: "4 hr ago",
      text: "Big thanks for your help in helping on the outage today",
      myReward: false,
    },
    {
      rewardGiver: "Rajesh Kumar",
      rewardConsumer: "Alex Brown",
      time: "Feb 1, 2021",
      text: "Big thanks for your help in helping on the outage today, Big thanks for your help in helping on the outage today",
      myReward: false,
    },
  ],
  filteredFeed: [],
};

export const RewardContext = createContext();

export const RewardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  console.log(state);

  return (
    <RewardContext.Provider value={{ state, dispatch }}>
      {children}
    </RewardContext.Provider>
  );
};
