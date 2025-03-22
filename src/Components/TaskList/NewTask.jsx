import React from 'react';

function NewTask({ data, updateTaskStatus }) {
  return (
    <div className="py-6 h-auto shrink-0 px-5 w-full sm:w-[48%] lg:w-[30%] rounded-2xl bg-sky-400">
      <div className="flex justify-between text-white">
        <div className="w-24 bg-red-400 h-10 flex justify-center items-center font-semibold px-3 text-center rounded-md">
          {data.taskCategory}
        </div>
        <h3 className="text-sm sm:text-md lg:text-xl font-semibold">{data.taskDate}</h3>
      </div>
      <h1 className="text-lg sm:text-xl lg:text-2xl text-zinc-100 mt-3 ml-2 capitalize">{data.taskTitle}</h1>
      <p className="text-sm sm:text-md mt-3 ml-2 text-white">{data.taskDescription}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-between text-sm sm:text-md">
        <button 
          onClick={() => updateTaskStatus(data.taskTitle, 'completed')} 
          className="mt-4 px-4 py-2 text-white bg-green-500 rounded-lg w-full sm:w-auto"
        >
          Mark as Completed
        </button>
        <button 
          onClick={() => updateTaskStatus(data.taskTitle, 'rejected')} 
          className="mt-4 px-4 py-2 text-white bg-red-500 rounded-lg w-full sm:w-auto"
        >
          Mark as Rejected
        </button>
      </div>
    </div>
  );
}

export default NewTask;
