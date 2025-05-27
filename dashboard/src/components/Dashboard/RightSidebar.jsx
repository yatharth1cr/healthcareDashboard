const schedule = [
  {
    day: "Thursday",
    events: [
      { time: "11:00 AM", title: "Health checkup complete", icon: "💉" },
      { time: "14:00 PM", title: "Ophthalmologist", icon: "👁️" },
    ],
  },
  {
    day: "Saturday",
    events: [
      { time: "12:00 AM", title: "Cardiologist", icon: "❤️" },
      { time: "16:00 PM", title: "Neurologist", icon: "🧠" },
    ],
  },
];

const RightSidebar = () => {
  return (
    <aside className="w-full lg:w-[550px] bg-white p-6 rounded-3xl shadow-xl space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">October 2021</h2>
        <div className="flex items-center gap-2">
          <button className="text-indigo-500 text-xl">◀</button>
          <button className="text-indigo-500 text-xl">▶</button>
        </div>
      </div>

      {/* Calendar Grid with Times */}
      <div className="grid grid-cols-7 gap-4 text-center text-sm text-[#3734a9]">
        {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day, i) => (
          <div key={day}>
            {/* Day Label */}
            <p
              className={`text-xs font-semibold ${
                day === "Sun" ? "text-gray-400" : "text[#3734a9]"
              }`}
            >
              {day}
            </p>

            {/* Date */}
            <div
              className={`py-2 text-sm font-medium rounded-lg mt-1 ${
                day === "Sun" ? "text-gray-400" : ""
              }`}
            >
              {[25, 26, 27, 28, 29, 30, 31][i]}
            </div>

            {/* Time Slots */}
            <div
              className={`rounded-lg px-2 py-1 mt-2 space-y-2 ${
                day === "Tues" ? "bg-indigo-100" : ""
              }`}
            >
              {/* Time Slot 1 */}
              <p
                className={`text-[10px] rounded-lg px-2 py-1 ${
                  day === "Sat"
                    ? "text-white bg-[#acaed6]"
                    : day === "Sun"
                    ? "text-white bg-[#acaed6]"
                    : ""
                }`}
              >
                {["10:00", "08:00", "12:00", "10:00", "—", "12:00", "09:00"][i]}
              </p>

              {/* Time Slot 2 (highlighted) */}
              <p
                className={`text-[10px] px-2 py-1 rounded-lg font-semibold ${
                  day === "Tues"
                    ? "bg-[#3836a8] text-white"
                    : day === "Thurs"
                    ? "bg-[#acaed6] text-white"
                    : day === "Sun"
                    ? "text-gray-300"
                    : "text-[#3836a8]"
                }`}
              >
                {["11:00", "09:00", "—", "11:00", "14:00", "09:00", "10:00"][i]}
              </p>

              {/* Time Slot 3 */}
              <p
                className={`text-[10px] ${
                  day === "Sun" ? "text-gray-300" : "text-[#3734a9]"
                }`}
              >
                {["12:00", "10:00", "13:00", "—", "16:00", "14:00", "11:00"][i]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Appointments Today */}
      <div className="flex flex-row gap-4">
        <div className="bg-[#3734a9] text-white p-4 rounded-2xl shadow lg:w-[calc(100%-300px)]">
          <div className="flex items-center justify-between">
            <p className="font-medium text-sm">Dentist</p>
            <p>🦷</p>
          </div>
          <p className="text-sm mt-1">09:00–11:00</p>
          <p className="text-xs mt-1">Dr. Cameron Williamson</p>
        </div>
        <div className="bg-[#dde2f9] text-indigo-900 p-4 rounded-2xl shadow lg:w-[calc(100%-160px)]">
          <div className="flex items-center justify-between">
            <p className="font-medium text-sm">Physiotherapy Appointment</p>
            <p>💪</p>
          </div>
          <p className="text-sm mt-1">11:00–12:00</p>
          <p className="text-xs mt-1">Dr. Kevin Djones</p>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div>
        <h3 className="font-semibold text-[#3734a9] mb-4 text-base">
          The Upcoming Schedule
        </h3>
        {schedule.map((day) => (
          <div key={day.day} className="mb-5">
            <p className="text-sm text-gray-500 font-semibold mb-2">
              On {day.day}
            </p>
            <div className="flex flex-row gap-3">
              {day.events.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center justify bg-[#dde2f9] text-indigo-900 rounded-2xl p-4  text-sm shadow-sm"
                >
                  <div className="flex flex-col items- gap-2 font-medium">
                    <div className="flex justify-between">
                      <p>{event.title}</p>
                      <span>{event.icon}</span>
                    </div>
                    <span className="text-xs text-gray-500">{event.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default RightSidebar;
