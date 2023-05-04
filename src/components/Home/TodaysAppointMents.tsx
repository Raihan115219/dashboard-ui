import { BiFullscreen } from "react-icons/bi";
import { todaysAppoint } from "../../Data/todaysApointData";

const TodaysAppointMents = () => {
  return (
    <div className=" bg-base-100 w-full shadow-md rounded-md">
      <div>
        <div className="p-5 flex justify-between items-center">
          <span className="font-bold text-xl text-blue-400">
            Todays Appointments
          </span>
          <span className="cursor-pointer text-xl">
            <BiFullscreen />
          </span>
        </div>
        <div className="overflow-x-auto w-full p-4">
          <table className=" table w-full">
            {/* head */}
            <thead className="text-left">
              <tr>
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
                      <div className="w-15 h-15 rounded-full bg-green-200 p-2 flex justify-center items-center ">
                        <span className="text-xl text-center">{item.icon}</span>
                      </div>
                      <div>
                        <p className="text-sm opacity-50">{item.name}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="text-sm opacity-50">{item.time}</p>
                  </td>
                  <td>
                    <span className="text-sm opacity-50">
                      {item.application}
                    </span>
                  </td>
                  <td>
                    <span className="text-sm p-2 rounded-xl px-2 bg-green-400 text-blue-600 font-bold ">
                      {item.status}
                    </span>
                  </td>
                  <td className="flex items-center ">
                    {item.trends.map((trend, i) => (
                      <img
                        className="w-5 h-5 rounded-full mx-1"
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
