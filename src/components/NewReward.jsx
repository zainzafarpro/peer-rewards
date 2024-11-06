import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useContext, useRef, useState } from "react";
import { RewardContext } from "@/context/RewardContext";

const NewReward = () => {
  const [open, setOpen] = useState(false);
  const { dispatch } = useContext(RewardContext);
  const toRef = useRef();
  const rewardRef = useRef();
  const whyRef = useRef();

  function timeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const intervals = [
      { label: "yr", seconds: 31536000 },
      { label: "mo", seconds: 2592000 },
      { label: "wk", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hr", seconds: 3600 },
      { label: "min", seconds: 60 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
      }
    }
    return "just now";
  }

  function handleSubmit(e) {
    e.preventDefault();
    const now = new Date();
    dispatch({
      type: "ADD",
      to: toRef?.current?.value,
      reward: rewardRef?.current?.value,
      why: whyRef?.current?.value,
      myReward: true,
      time: timeAgo(now),
    });
    setOpen(false);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="ml-auto">
        <Button asChild variant="outline" className="rounded-full size-12">
          <Plus className="size-12" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Reward Modal</DialogTitle>
          <DialogDescription>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="to">To</label>
                <Input placeholder="Alex Brown" ref={toRef} required={true} />
              </div>
              <div>
                <label htmlFor="reward">Reward</label>
                <Input
                  type="number"
                  placeholder="$30"
                  ref={rewardRef}
                  required={true}
                />
              </div>
              <div>
                <label htmlFor="why">Why?</label>
                <Textarea ref={whyRef} required={true} />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-purple-500 hover:bg-purple-600 self-center place-self-center flex"
              >
                Submit
              </Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default NewReward;
