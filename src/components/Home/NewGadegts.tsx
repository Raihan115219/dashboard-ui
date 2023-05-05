import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import CardHeading from "../common/CardHeading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Months",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
      backgroundColor: "rgb(249 115 22",
    },
  ],
};

const NewGadegts = () => {
  return (
    <div className=" bg-base-100 w-full h-full shadow-md rounded-md p-5">
      <CardHeading
        heading1="New Gadgets"
        heading2="View All"
        tab1="Months"
        tab2="Last Year"
        tab3="This year"
      />
      <div className="w-full">
        <Bar options={options} data={data} className="mt-10" />
        <p className="text-center">over user</p>
      </div>
    </div>
  );
};

export default NewGadegts;
