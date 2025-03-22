const Employee = [
  {
    "id": 1,
    "name": "Ali Khan",
    "email": "employee1@example.com",
    "password": "123",
    "taskCount": { "completed": 1, "failed": 1, "accepted": 1, "newTask": 0 },
    "tasks": [
      {
        "accepted": true,
        "completed": false,
        "failed": false,
        "newTask": false,
        "taskTitle": "Design Homepage",
        "taskDescription": "Create a responsive homepage layout.",
        "taskCategory": "Design",
        "taskDate": "2025-03-10"
      },
      {
        "accepted": false,
        "completed": true,
        "failed": false,
        "newTask": false,
        "taskTitle": "Fix Navbar Bug",
        "taskDescription": "Resolve the issue with the navbar dropdown.",
        "taskCategory": "Development",
        "taskDate": "2025-03-05"
      },
      {
        "accepted": false,
        "completed": false,
        "failed": true,
        "newTask": false,
        "taskTitle": "Deploy API",
        "taskDescription": "Deploy the backend API to production.",
        "taskCategory": "DevOps",
        "taskDate": "2025-03-02"
      }
    ]
  },
  // Repeat similar changes for other employees...
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
