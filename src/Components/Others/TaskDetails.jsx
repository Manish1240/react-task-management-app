import React from 'react';

function TaskDetails({ data }) {
  console.log(data);

  return (
    <div className="flex flex-wrap gap-4 px-5 mt-0 w-full justify-center sm:justify-around">
      <div className="bg-red-400 px-6 sm:pr-40 sm:pl-10 rounded-2xl flex flex-col items-start py-5 text-lg sm:text-2xl text-white w-full sm:w-auto">
        <h1 className="text-2xl sm:text-3xl font-bold">{data.taskCount.newTask}</h1>
        <h1 className="font-semibold">New Task</h1>
      </div>
      <div className="bg-sky-400 px-6 sm:pr-40 sm:pl-10 rounded-2xl flex flex-col items-start py-5 text-lg sm:text-2xl text-white w-full sm:w-auto">
        <h1 className="text-2xl sm:text-3xl font-bold">{data.taskCount.completed}</h1>
        <h1 className="font-semibold">Completed Task</h1>
      </div>
      <div className="bg-green-400 px-6 sm:pr-40 sm:pl-10 rounded-2xl flex flex-col items-start py-5 text-lg sm:text-2xl text-white w-full sm:w-auto">
        <h1 className="text-2xl sm:text-3xl font-bold">{data.taskCount.accepted}</h1>
        <h1 className="font-semibold">Accepted Task</h1>
      </div>
      <div className="bg-yellow-400 px-6 sm:pr-40 sm:pl-10 rounded-2xl flex flex-col items-start py-5 text-lg sm:text-2xl text-white w-full sm:w-auto">
        <h1 className="text-2xl sm:text-3xl font-bold">{data.taskCount.failed}</h1>
        <h1 className="font-semibold">Failed Task</h1>
      </div>
    </div>
  );
}

export default TaskDetails;
