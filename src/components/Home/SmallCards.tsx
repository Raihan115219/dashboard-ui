interface IProps {
  item: any;
}

const SmallCards = ({ item }: IProps) => {
  console.log(item);
  return (
    <div className=" bg-[#ffffff] w-48 h-28 shadow-md rounded-md">
      <div className="card-body">
        <div className="flex  items-center gap-2 ">
          <div
            className={`w-[30px] h-[30px] rounded-full p-5  opacity-30 bg-[${item.bg}]  flex justify-center items-center `}
          >
            <span className={` text-[20px]  text-black`}>{item.icon}</span>
          </div>
          <div>
            <span className="text-xl font-[700] text-[#31394d]">
              {item.amount}
            </span>
            <br />
            <p className=" text-[8px] text-[#8398ae]">{item.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCards;
