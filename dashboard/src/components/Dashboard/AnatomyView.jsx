import { FaAngleDown, FaAngleRight, FaArrowRight } from "react-icons/fa";
const AnatomyView = () => {
  const statusItems = [
    {
      name: "🫁 Lungs",
      barColor: "bg-[#b34d4d]",
      date: "26 Oct 2021",
    },
    {
      name: "🦷 Teeth",
      barColor: "bg-[#7bd3c3]",
      date: "26 Oct 2021",
    },
    {
      name: "🦴 Bone",
      barColor: "bg-[#fd7b5c]",
      date: "26 Oct 2021",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-6 text-[#3734a9]">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <p className="text-sm flex items-center">
          This Week
          <FaAngleDown />
        </p>
      </div>
      <div className="flex gap-6 col md:flex-row">
        {/* Human body image */}
        <div className="relative rounded-2xl w-full p-">
          <img
            src="https://media.istockphoto.com/id/1185122356/photo/muscles-of-the-human-body-anterior-view-3d-rendering.jpg?s=612x612&w=0&k=20&c=T4NS4rsVoDO4NegMcrKc2tL7UybeqGVc59p7_5TpB4A="
            alt="Human Body"
            className="w-76 rounded-2xl"
          />

          {/* Labels */}
          <div className="absolute top-25 right-30 bg-[#3734a9] text-white px-2 py-2 rounded-lg text-sm font-medium shadow">
            ❤️ Healthy Heart
          </div>
          <div className="absolute bottom-30 left-4 bg-[#0edcea] text-blue-800 px-2 py-2 rounded-lg text-sm font-medium shadow">
            🦵 Healthy Leg
          </div>
        </div>

        {/* Health status list */}
        <div className="flex flex-col gap-4 w-1/2">
          {statusItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-4 py-6 rounded-xl shadow-sm bg-[#f7f8fc]"
            >
              <div className="flex flex-col w-full">
                <span className="font-semibold mb-1 text-gray-800">
                  {item.name}
                </span>
                <span className="text-sm text-gray-400 mb-2">
                  Date: {item.date}
                </span>

                {/* Custom progress bar */}
                <div className="w-full h-2 bg-gray-300 rounded-full relative overflow-hidden">
                  <div
                    className={`h-full ${item.barColor} rounded-full`}
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
          <div className=" mt-6">
            <span className=" text-[#3734a9] font-semibold gap-2 text-sm flex items-center cursor-pointer">
              Details
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnatomyView;
