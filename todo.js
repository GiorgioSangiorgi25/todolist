const tasklist = [
  {
    idTask: 1,
    nameTask: "task1",
    userId: 3,
    priorityId: 2,
    completed: true,
  },
  {
    idtask: 2,
    nameTask: "task2",
    userId: 1,
    priorityId: 2,
    completed: true,
  },
  {
    idTask: 3,
    nameTask: "task3",
    userId: 3,
    priorityId: 1,
    completed: false,
  },
  {
    idTask: 4,
    nameTask: "task4",
    userd: 2,
    priorityId: 1,
    completed: false,
  },
];

// assign
const assignto = [
  { id: 1, name: "Giorgio" },
  { id: 2, name: "Mario" },
  { id: 3, name: "Gabriele" },
];
// priority
const priority = [
  { id: 1, name: "low" },
  { id: 2, name: "medium" },
  { id: 3, name: "high" },
];

const obj = {
  idtask: 2,
  nameTask: "task1",
  userId: "Roberto",
  priority: "Low",
};
// FUNCTION
const addTask = (obj, tasklist) => {
  const newArray = [...tasklist, obj];
  return newArray;
};

const remove = (id, tasklist) => {
  const newArray = tasklist.filter((idTask) => idTask.idTask !== id);
  return newArray;
};

const priorityFunc = (tasklist, priorityId) => {
  const newArray = tasklist.filter(
    (priority) => priority.priorityId !== priorityId
  );
  return newArray;
};

const priorityFunc2 = priorityFunc(tasklist, 2);

console.log(priorityFunc2);

const modify = (tasklist, id, nuovoValore) => {
  const newArray = tasklist.map((task) => {
    if (task.idTask === id) {
      task.nameTask = nuovoValore;
    }
  });
  return newArray;
};

const ciaone = modify(tasklist, 4, "Ciao Sono Giorgio");
console.log(ciaone, tasklist);
