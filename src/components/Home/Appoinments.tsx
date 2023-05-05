import { commonCardData } from "../../Data/commonCardData";
import CardHeading from "../common/CardHeading";

const Appointments = () => {
  return (
    <div className=" bg-base-100 w-full min-h-full shadow-md rounded-md p-5">
      <CardHeading
        heading1="Appointments"
        heading2="View All"
        tab1="Pending"
        tab2="Expired"
      />

      <div className="mt-5">
        {commonCardData.map((item, i) => (
          <div className="flex justify-between items-center mt-2 mb-2 " key={i}>
            <div className="flex items-center gap-3">
              <span>
                <img
                  className="w-[40px] h-[40px] rounded-full "
                  src={item.user}
                  alt=""
                />
              </span>
              <div className="leading-3">
                <p className="text-[8px] font-bold text-[#0e1317]">
                  {item.name}
                </p>
                <span className="text-[#8398ae] text-[7px] font-bold">
                  {item.time}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-end">
              {item.trends.map((trend, i) => (
                <img
                  className="w-5 h-5 rounded-full mx-1 text-start"
                  src={trend.obj}
                  alt="test"
                  key={i}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
