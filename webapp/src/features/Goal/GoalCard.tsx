import * as React from "react";
import { Flame } from "lucide-react";
import { GoalCalendar } from "./GoalCalendar";

interface GoalCardProps {
  color: string;
  goalText: string;
  count: number;
}

const GoalCard: React.FC<GoalCardProps> = ({ color, goalText, count }) => {
  const highlightedDates = [
    new Date(2024, 9, 14),
    new Date(2024, 9, 15),
    new Date(2024, 9, 20),
  ];

  console.log(highlightedDates);
  console.log(new Date());
  return (
    <div
      className={`flex flex-col items-stretch p-2.5 pb-3 gap-3 ${color} rounded-lg max-w-full`}
    >
      <GoalCalendar
        modifiers={{
          highlighted: highlightedDates,
        }}
        modifiersClassNames={{
          highlighted: `${color} text-primary-foreground rounded-md`,
        }}
      />
      <div className="flex flex-col gap-1 text-primary-foreground">
        <div className="flex gap-1 justify-center">
          <Flame size={16} />
          <p className="text-sm font-semibold">{count}</p>
        </div>
        <p className="text-base font-bold text-center">{goalText}</p>
      </div>
    </div>
  );
};

export default GoalCard;
