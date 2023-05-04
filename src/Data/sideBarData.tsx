import { RiQrScan2Fill } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import { BsQrCode } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";
import { SiArtstation } from "react-icons/si";
import { FaArtstation } from "react-icons/fa";
import { TbPlaystationTriangle } from "react-icons/tb";

export const sideBarIcon = [
  {
    id: 1,
    icon: <RiQrScan2Fill />,
    link: "/home",
  },
  {
    id: 2,
    icon: <BiWallet />,
    link: "/about",
  },
  {
    id: 3,
    icon: <BsQrCode />,
    link: "/code",
  },
  {
    id: 4,
    icon: <FiSettings />,
    link: "/settings",
  },
  {
    id: 5,
    icon: <IoMdContact />,
    link: "/contact",
  },
  {
    id: 6,
    icon: <SiArtstation />,
    link: "/try1",
  },
  {
    id: 7,
    icon: <FaArtstation />,
    link: "/try2",
  },
  {
    id: 8,
    icon: <TbPlaystationTriangle />,
    link: "/try3",
  },
];
