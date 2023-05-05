import { BiFullscreen } from "react-icons/bi";
import { todaysAppoint } from "../../Data/todaysApointData";

const TodaysAppointMents = () => {
  return (
    <div className=" bg-base-100 w-full shadow-md rounded-md">
      <div>
        <div className="p-5 flex justify-between items-center">
          <span className="font-[700] text-[14px] text-[#424e9c]">
            Todays Appointments
          </span>
          <span className="cursor-pointer text-xl">
            <BiFullscreen />
          </span>
        </div>
        <div className="overflow-x-auto w-full p-4">
          <table className=" table w-full">
            {/* head */}
            <thead className="text-left bg-[#f5f6fa]">
              <tr className="text-[7px]">
                <th>Name</th>
                <th>Time</th>
                <th>Application</th>
                <th>Status</th>
                <th>Trending</th>
              </tr>
            </thead>
            <tbody>
              {/* row 2 */}
              {todaysAppoint.map((item, i) => (
                <tr key={i}>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="w-[33px] h-[33px] rounded-full  flex justify-center items-center ">
                        <span
                          className={`text-xl text-center text-[${item.color}]`}
                        >
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <p className="text-[#8398ae] text-[8px] text-[600] ">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="text-[#8398ae] text-[8px]  text-[600]">
                      {item.time}
                    </p>
                  </td>
                  <td>
                    <span className="text-[#8398ae] text-[8px] text-[600] ">
                      {item.application}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`text-[10px] text-[700] p-2 rounded-md w-[39px] h-[13px]  ${
                        item.status === "Confirm"
                          ? "bg-green-200"
                          : "bg-blue-300"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="flex items-center">
                    {item.trends.map((trend, i) => (
                      <img
                        className="w-6 h-6 rounded-full mx-1"
                        src={trend.obj}
                        alt="test"
                        key={i}
                      />
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodaysAppointMents;
