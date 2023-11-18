import React from "react";

const HistoryTable = ({ maxTime, times, index }) => {
  return (
    <div className="w-full h-[500px] shrink-0 flex flex-col justify-between py-5 border-2 border-cyan-400 rounded-xl relative">
      <table className="w-full">
        <thead>
          <tr className=" border-b-2">
            <th>Lần nhập</th>
            <th>Số nhập vào</th>
          </tr>
        </thead>
        <tbody>
          {times.map((value, index) => (
            <tr className="border-b" key={index}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="group flex flex-col gap-3 text-center">
        <p className=" font-bold">Lần chơi thứ: {index}</p>
        <p className=" font-bold">Số lần nhập tối đa: {maxTime}</p>
        <p className=" font-bold">
          Tỷ lệ đúng: {((1 - (times.length - 1) / maxTime) * 100).toFixed(2)}%
        </p>
      </div>
      <button className="bg-cyan-400 p-2 rounded-bl-xl rounded-tr-md absolute top-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
};

export default HistoryTable;
