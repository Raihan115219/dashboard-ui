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
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgb(249 115 22",
    },
  ],
};

const Products = () => {
  return (
    <div className=" bg-base-100 w-full h-full shadow-md rounded-md p-5">
      <div className="title flex justify-between items-center ">
        <div>
          <h3 className="font-bold text-blue-400">New Gadget</h3>
        </div>
        <div>
          <span className="font-bold underline text-orange-500 cursor-pointer">
            view all
          </span>
        </div>
      </div>
      <div>
        <Bar options={options} data={data} />;
      </div>
    </div>
  );
};

export default Products;
