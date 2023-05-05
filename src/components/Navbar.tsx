import { FiBell } from "react-icons/fi";
import { BiEnvelopeOpen, BiChat } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const navBarData = [
    { id: 1, name: "Name", icon: <FaClipboardList /> },
    { id: 2, name: "Name", icon: <FiBell /> },
    { id: 3, name: "Name", icon: <BiEnvelopeOpen /> },
    { id: 4, name: "Name", icon: <BiChat /> },
  ];

  return (
    <div>
      <div className="bg-white px-10 fixed top-0 z-50 w-full">
        <div className="flex justify-between items-center py-4">
          <div className="flex gap-3 items-center">
            <div>
              <RxHamburgerMenu className="text-xl cursor-pointer mr-3 mt-2" />
            </div>
            <h3 className="text-2xl cursor-pointer font-bold text-blue-500">
              Brand Name
            </h3>
          </div>
          <div className="flex justify-center items-center">
            <div className="px-6 flex  justify-evenly items-center gap-4">
              {navBarData.map((item, i) => (
                <p className="text-2xl text-gray-400 cursor-pointer" key={i}>
                  {item.icon}
                </p>
              ))}
            </div>
            <div className="flex justify-evenly items-center">
              <img
                src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000"
                alt="user"
                className="w-[40px] h-[40px] rounded-full"
              />
              <p className="ml-2">Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
