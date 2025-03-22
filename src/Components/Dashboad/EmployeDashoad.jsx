import React from 'react';
import Header from '../Others/Header';
import TaskDetails from '../Others/TaskDetails';
import Tasklist from '../TaskList/Tasklist';

function EmployeDashboard(props) {
  return (
    <div className="bg-[#0A0F1D] min-h-screen w-full text-white">
      {/* Header Section */}
      <Header changeuser={props.changeuser} data={props.data} />

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
        {/* Task Details Section */}
        <TaskDetails data={props.data} />

        {/* Task List Section */}
        <div className="mt-8">
          <Tasklist data={props.data} updateTaskStatus={props.updateTaskStatus} />
        </div>
      </div>
    </div>
  );
}

export default EmployeDashboard;
