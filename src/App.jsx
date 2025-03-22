import React, { useContext, useEffect, useState } from 'react';
import Login from './Components/Auth/Login';
import EmployeDashoad from './Components/Dashboad/EmployeDashoad';
import AdminDashboad from './Components/Dashboad/AdminDashboad';
import { AuthContext } from './Context/AuthProvider';

function App() {
  const AuthData = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [LoggedInUserData, setLoggedInUserData] = useState({
    id: null,
    name: '',
    email: '',
    taskCount: { newTask: 0, accepted: 0, completed: 0, failed: 0 },
    tasks: [] // ✅ Ensure tasks is always an array
  });

  useEffect(() => {
    const Loggedinuser = localStorage.getItem("LoggedInUser");
    if (Loggedinuser) {
      const UserData = JSON.parse(Loggedinuser);
      setUser(UserData.role);
      setLoggedInUserData(UserData.data || {}); // ✅ Ensure default object
    }
  }, []);

  const LoginHandler = (email, password) => {
    if (email === 'Admin1240@gmail.com' && password === 'Admin1240') {
      setUser('admin');
      localStorage.setItem('LoggedInUser', JSON.stringify({ role: "admin", data: {} }));
    } else if (AuthData) {
      const employee = AuthData.employees.find((e) => email === e.email && password === e.password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('LoggedInUser', JSON.stringify({ role: "employee", data: employee }));
      } else {
        alert("Wrong password or email");
      }
    }
  };

  // ✅ Function to update tasks when a task is completed or rejected
  const updateTaskStatus = (taskId, status) => {
    setLoggedInUserData((prevData) => {
      if (!prevData || !prevData.tasks) return prevData; // ✅ Prevent errors

      const updatedTasks = prevData.tasks.map(task =>
        task.taskTitle === taskId
          ? { ...task, newTask: false, completed: status === 'completed', failed: status === 'rejected' }
          : task
      );

      return {
        ...prevData,
        tasks: updatedTasks,
        taskCount: {
          ...prevData.taskCount,
          newTask: prevData.taskCount.newTask - 1,
          completed: status === 'completed' ? prevData.taskCount.completed + 1 : prevData.taskCount.completed,
          failed: status === 'rejected' ? prevData.taskCount.failed + 1 : prevData.taskCount.failed,
        }
      };
    });
  };

  return (
    <>
      {!user ? <Login LoginHandler={LoginHandler} /> : null}
      {user === 'admin' ? <AdminDashboad changeuser={setUser} /> : null}
      {user === 'employee' ? <EmployeDashoad changeuser={setUser} data={LoggedInUserData} updateTaskStatus={updateTaskStatus} /> : null}
    </>
  );
}

export default App;
