import React from 'react';
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';

function Tasklist({ data, updateTaskStatus }) {
  // ✅ Ensure `tasks` is always an array before using `.map()`
  const tasks = data?.tasks || [];

  return (
    <div id="list" className="h-auto flex overflow-x-auto sm:overflow-hidden flex-wrap justify-center sm:justify-start gap-5 mt-6 w-full px-5 sm:px-10">
      {tasks.length === 0 ? (
        <p className="text-white text-xl">No tasks available</p>
      ) : (
        tasks.map((elem, i) => {
          if (elem.newTask) {
            return <NewTask key={i} data={elem} updateTaskStatus={updateTaskStatus} />;
          }
          if (elem.accepted) {
            return <AcceptTask key={i} data={elem} />;
          }
          if (elem.completed) {
            return <CompleteTask key={i} data={elem} />;
          }
          if (elem.failed) {
            return <FailedTask key={i} data={elem} />;
          }
          return null;
        })
      )}
    </div>
  );
}

export default Tasklist;
