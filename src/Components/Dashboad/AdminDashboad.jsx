import React from 'react';
import Header from '../Others/Header';
import AllTask from '../Others/AllTask';
import CreateTask from '../Others/CreateTask';
import { setLocalStorage } from '../../Utils/LocalStorage';

function AdminDashboad(props) {
  return (
    <div className="w-full min-h-screen bg-zinc-900 p-4 sm:p-5">
      <Header changeuser={props.changeuser} />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboad;