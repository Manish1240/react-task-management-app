import React from 'react';

function FailedTask({ data }) {
  return (
    <div className="py-6 h-auto shrink-0 px-5 w-full sm:w-[48%] lg:w-[30%] rounded-2xl bg-orange-500">
      <div className="flex justify-between text-white">
        <div className="px-3 py-2 bg-red-400 text-center font-semibold rounded-md">
          {data.taskCategory}
        </div>
        <h3 className="text-sm sm:text-md lg:text-xl font-semibold">{data.taskDate}</h3>
      </div>
      <h1 className="text-lg sm:text-xl lg:text-2xl text-zinc-100 mt-3 ml-2 capitalize">{data.taskTitle}</h1>
      <p className="text-sm sm:text-md mt-3 ml-2 text-white">{data.taskDescription}</p>
      <button className="mt-4 ml-2 w-full sm:w-auto px-4 py-2 text-center text-white text-sm sm:text-md bg-orange-700 rounded-lg">
        Failed
      </button>
    </div>
  );
}

export default FailedTask;
