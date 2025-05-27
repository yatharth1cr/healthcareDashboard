// import { FaArrowLeft, FaArrowRight, FaPlusSquare } from "react-icons/fa";

// const schedule = [
//   {
//     day: "Thursday",
//     events: [
//       { time: "11:00 AM", title: "Health checkup complete", icon: "💉" },
//       { time: "14:00 PM", title: "Ophthalmologist", icon: "👁️" },
//     ],
//   },
//   {
//     day: "Saturday",
//     events: [
//       { time: "12:00 AM", title: "Cardiologist", icon: "❤️" },
//       { time: "16:00 PM", title: "Neurologist", icon: "🧠" },
//     ],
//   },
// ];

// const RightSidebar = () => {
//   return (
//     <aside className="w-full lg:w-[550px] bg-white p-6 rounded-3xl shadow-xl space-y-8">
//       {/* Header */}
//       <div className="flex items-center justify-end mb-6">
//         <img
//           src="https://i.etsystatic.com/iusa/0203ab/68294570/iusa_75x75.68294570_agzn.jpg?version=0"
//           alt="avatarImg"
//           className="w-8 h-8 rounded-sm object-cover"
//         />
//         <button>
//           <FaPlusSquare className="text-[#3734a9] text-4xl" />
//         </button>
//       </div>
//       <div className="flex items-center justify-between">
//         <h2 className="text-lg font-semibold text-[#3734a9]">October 2021</h2>
//         <div className="flex items-center gap-2">
//           <button className="text-[#3734a9] text-xl">
//             <FaArrowLeft />
//           </button>
//           <button className="text-[#3734a9] text-xl">
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>

//       {/* Calendar Grid with Times */}
//       <div className="grid grid-cols-7 gap-4 text-center text-sm text-[#3734a9]">
//         {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day, i) => (
//           <div key={day}>
//             {/* Day Label */}
//             <p
//               className={`text-xs font-semibold ${
//                 day === "Sun" ? "text-gray-400" : "text[#3734a9]"
//               }`}
//             >
//               {day}
//             </p>

//             {/* Date */}
//             <div
//               className={`py-2 text-sm font-medium rounded-lg mt-1 ${
//                 day === "Sun" ? "text-gray-400" : ""
//               }`}
//             >
//               {[25, 26, 27, 28, 29, 30, 31][i]}
//             </div>

//             {/* Time Slots */}
//             <div
//               className={`rounded-lg px-2 py-1 mt-2 space-y-2 ${
//                 day === "Tues" ? "bg-indigo-100" : ""
//               }`}
//             >
//               {/* Time Slot 1 */}
//               <p
//                 className={`text-[10px] rounded-lg px-2 py-1 ${
//                   day === "Sat"
//                     ? "text-white bg-[#acaed6]"
//                     : day === "Sun"
//                     ? "text-white bg-[#acaed6]"
//                     : ""
//                 }`}
//               >
//                 {["10:00", "08:00", "12:00", "10:00", "—", "12:00", "09:00"][i]}
//               </p>

//               {/* Time Slot 2 (highlighted) */}
//               <p
//                 className={`text-[10px] px-2 py-1 rounded-lg font-semibold ${
//                   day === "Tues"
//                     ? "bg-[#3836a8] text-white"
//                     : day === "Thurs"
//                     ? "bg-[#acaed6] text-white"
//                     : day === "Sun"
//                     ? "text-gray-300"
//                     : "text-[#3836a8]"
//                 }`}
//               >
//                 {["11:00", "09:00", "—", "11:00", "14:00", "09:00", "10:00"][i]}
//               </p>

//               {/* Time Slot 3 */}
//               <p
//                 className={`text-[10px] ${
//                   day === "Sun" ? "text-gray-300" : "text-[#3734a9]"
//                 }`}
//               >
//                 {["12:00", "10:00", "13:00", "—", "16:00", "14:00", "11:00"][i]}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Appointments Today */}
//       <div className="flex flex-row gap-4">
//         <div className="bg-[#3734a9] text-white p-4 rounded-2xl shadow lg:w-[calc(100%-300px)]">
//           <div className="flex items-center justify-between">
//             <p className="font-medium text-sm">Dentist</p>
//             <p>🦷</p>
//           </div>
//           <p className="text-sm mt-1">09:00–11:00</p>
//           <p className="text-xs mt-1">Dr. Cameron Williamson</p>
//         </div>
//         <div className="bg-[#dde2f9] text-indigo-900 p-4 rounded-2xl shadow lg:w-[calc(100%-160px)]">
//           <div className="flex items-center justify-between">
//             <p className="font-medium text-sm">Physiotherapy Appointment</p>
//             <p>💪</p>
//           </div>
//           <p className="text-sm mt-1">11:00–12:00</p>
//           <p className="text-xs mt-1">Dr. Kevin Djones</p>
//         </div>
//       </div>

//       {/* Upcoming Schedule */}
//       <div>
//         <h3 className="font-semibold text-[#3734a9] mb-4 text-base">
//           The Upcoming Schedule
//         </h3>
//         {schedule.map((day) => (
//           <div key={day.day} className="mb-5">
//             <p className="text-sm text-gray-500 font-semibold mb-2">
//               On {day.day}
//             </p>
//             <div className="flex flex-row gap-3">
//               {day.events.map((event, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify bg-[#dde2f9] text-indigo-900 rounded-2xl p-4  text-sm shadow-sm"
//                 >
//                   <div className="flex flex-col items- gap-2 font-medium">
//                     <div className="flex justify-between">
//                       <p>{event.title}</p>
//                       <span>{event.icon}</span>
//                     </div>
//                     <span className="text-xs text-gray-500">{event.time}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </aside>
//   );
// };

// export default RightSidebar;
import { FaArrowLeft, FaArrowRight, FaPlusSquare } from "react-icons/fa";

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

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const dates = [25, 26, 27, 28, 29, 30, 31];

const RightSidebar = () => {
  return (
    <aside className="w-full lg:w-[550px] bg-white p-6 rounded-3xl shadow-xl space-y-8">
      {/* Header */}
      <div className="flex items-center mb-4">
        <img
          src="https://i.etsystatic.com/iusa/0203ab/68294570/iusa_75x75.68294570_agzn.jpg?version=0"
          alt="avatar"
          className="w-8 h-8 rounded-sm object-cover"
        />
        <button>
          <FaPlusSquare className="text-[#3734a9] text-4xl sm:text-xl" />
        </button>
      </div>
      {/* Month Navigation */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#3734a9]">October 2021</h2>
        <div className="flex gap-2">
          <button className="text-[#3734a9] text-lg sm:text-xl">
            <FaArrowLeft />
          </button>
          <button className="text-[#3734a9] text-lg sm:text-xl">
            <FaArrowRight />
          </button>
        </div>
      </div>
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-4 text-center text-xs sm:text-sm text-[#3734a9]">
        {days.map((day, i) => (
          <div key={day} className="space-y-2">
            <p
              className={`font-semibold ${
                day === "Sun" ? "text-gray-400" : ""
              }`}
            >
              {day}
            </p>
            <div
              className={`py-1 rounded-lg font-medium ${
                day === "Sun" ? "text-gray-400" : ""
              }`}
            >
              {dates[i]}
            </div>

            <div
              className={`space-y-1 rounded-lg px-1 py-1 ${
                day === "Tues" ? "bg-indigo-100" : ""
              }`}
            >
              <p
                className={`text-[10px] rounded px-1 py-0.5 ${
                  ["Sat", "Sun"].includes(day) ? "bg-[#acaed6] text-white" : ""
                }`}
              >
                {["10:00", "08:00", "12:00", "10:00", "—", "12:00", "09:00"][i]}
              </p>
              <p
                className={`text-[10px] font-semibold px-1 py-0.5 rounded ${
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
      Appointments Today
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
        {schedule.map((item) => (
          <div key={item.day} className="mb-5">
            <p className="text-sm text-gray-500 font-semibold mb-2">
              On {item.day}
            </p>
            <div className="flex flex-wrap gap-3">
              {item.events.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 bg-[#dde2f9] text-indigo-900 rounded-2xl p-4 text-sm shadow-sm w-full sm:w-auto"
                >
                  <div className="flex items-center justify-between">
                    <p>{event.title}</p>
                    <span>{event.icon}</span>
                  </div>
                  <span className="text-xs text-gray-500">{event.time}</span>
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
