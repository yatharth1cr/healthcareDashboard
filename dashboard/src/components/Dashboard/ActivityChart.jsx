const COLORS = ["#e0e3e9", "#2cd3e1", "#4b509e", "#e0e3e9"];

const activityData = [
  { day: "Mon", values: [100, 30, 50, 40] },
  { day: "Tues", values: [100, 20, 60, 30] },
  { day: "Wed", values: [100, 45, 35, 55] },
  { day: "Thurs", values: [100, 25, 70, 50] },
  { day: "Fri", values: [100, 60, 40, 30] },
  { day: "Sat", values: [100, 40, 20, 60] },
  { day: "Sun", values: [100, 35, 55, 25] },
];

const ActivityChart = () => {
  return (
    <div className="bg-[#f6f9ff] p-6 rounded-xl shadow-sm w-full max-w-xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-base font-semibold text-[#4b509e]">Activity</h3>
        <span className="text-sm text-gray-400">
          3 appointments on this week
        </span>
      </div>

      {/* Chart Bars */}
      <div className="flex items-end justify-center space-x-[20px] ">
        {activityData.map((item, dayIdx) => (
          <div key={dayIdx} className="flex flex-col items-center space-y-1">
            {/* Bars for the day */}
            <div className="flex space-x-[4px] items-end h-36">
              {item.values.map((val, idx) => (
                <div
                  key={idx}
                  className="w-[4px] rounded-full"
                  style={{
                    height: `${val}px`,
                    backgroundColor: COLORS[idx],
                  }}
                />
              ))}
            </div>
            {/* Day Label */}
            <span className="text-[11px] text-gray-500 mt-1">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
