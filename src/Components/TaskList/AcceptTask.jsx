import React from 'react';

function AcceptTask({ data }) {
  return (
    <div className="py-6 h-auto shrink-0 px-5 w-full sm:w-[48%] lg:w-[30%] rounded-2xl bg-red-400">
      <div className="flex justify-between text-white">
        <div className="w-24 bg-red-600 h-10 flex justify-center items-center font-semibold px-3 text-center rounded-md">
          {data.taskCategory}
        </div>
        <h3 className="text-sm sm:text-md lg:text-xl font-semibold">{data.taskDate}</h3>
      </div>
      <h1 className="text-lg sm:text-xl lg:text-2xl text-zinc-100 mt-3 ml-2 capitalize">{data.taskTitle}</h1>
      <p className="text-sm sm:text-md mt-3 ml-2 text-white">{data.taskDescription}</p>
      <div className="flex flex-col sm:flex-row gap-3 mt-4 ml-2">
        <button className="py-2 px-4 rounded-lg bg-green-500 text-sm sm:text-md text-white w-full sm:w-auto">
          Mark as Completed
        </button>
        <button className="py-2 px-4 rounded-lg bg-red-500 text-sm sm:text-md text-white w-full sm:w-auto">
          Mark as Failed
        </button>
      </div>
    </div>
  );
}

export default AcceptTask;
