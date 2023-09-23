import DataCard from "@/components/dashboard/dataCard";
import CustomLayout from "@/components/layout/customLayout";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { BsFillBoxFill } from "react-icons/bs";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Dashboard = () => {
  return (
    <div className="w-full h-full bg-white">
      <div
        id="heading"
        className="flex w-full flex-wrap xl:flex-nowrap gap-4 p-4"
      >
        <div className="w-full xl:w-1/2 flex flex-wrap xl:flex-nowrap gap-4 grow">
          <DataCard
            title="Users"
            total="300k"
            icon={<FaUserAlt size={40} className="text-white" />}
            style={"grow"}
            bgColor="bg-green-500"
          />
          <DataCard
            title="Deliveries"
            total="1M"
            style={"grow"}
            icon={<TbTruckDelivery size={40} className="text-white" />}
            bgColor="bg-purple-500"
          />
          <DataCard
            title="Products"
            total="1000"
            style={"grow"}
            icon={<BsFillBoxFill size={40} className="text-white" />}
            bgColor="bg-cyan-500"
          />
        </div>
        <div className="w-full xl:w-1/2 flex h-52 grow">
          <ResponsiveContainer width="100%" height="100%" className={"grow"}>
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
