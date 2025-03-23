const Employee = [
  {
    "id": 1,
    "name": "Ali Khan",
    "email": "employee1@example.com",
    "password": "123",
    "taskCount": { "completed": 1, "failed": 1, "accepted": 1, "newTask": 0 },
    "tasks": []
  },
  {
    "id": 2,
    "name": "Ahmed",
    "email": "ahmed@example.com",
    "password": "123",
    "taskCount": { "completed": 2, "failed": 0, "accepted": 1, "newTask": 1 },
    "tasks": []
  },
  {
    "id": 3,
    "name": "Sarfaraz",
    "email": "sarfaraz@example.com",
    "password": "123",
    "taskCount": { "completed": 1, "failed": 1, "accepted": 0, "newTask": 2 },
    "tasks": []
  },
  {
    "id": 4,
    "name": "Ayesha",
    "email": "ayesha@example.com",
    "password": "123",
    "taskCount": { "completed": 3, "failed": 0, "accepted": 1, "newTask": 0 },
    "tasks": []
  }
];

const Admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('Employee', JSON.stringify(Employee));
  localStorage.setItem('Admin', JSON.stringify(Admin));
};

export const getLocalStorage = () => {
  const employee_data = localStorage.getItem('Employee');
  const employees = JSON.parse(employee_data);
  const Admin_data = localStorage.getItem('Admin');
  const admin = JSON.parse(Admin_data);
  return { employees, admin };
};
