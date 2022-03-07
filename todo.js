const tasklist = [
  {
    idtask: 1,
    nametask: "task1",
    userid: 3,
    priorityId: 2,
  },
  {
    idtask: 2,
    nametask: "task2",
    userid: 1,
    priorityId: 2,
  },
  {
    idtask: 3,
    nametask: "task3",
    userid: 3,
    priorityId: 1,
  },
  {
    idtask: 4,
    nametask: "task4",
    userid: 2,
    priorityId: 1,
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
  nametask: "task1",
  userid: "Roberto",
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

// addTask(obj, tasklist);

// const mapTask = remove(tasklist.idTask == 1, tasklist);

// const mapTask2 = () => {
//   const newArray = tasklist.filter((task) => task.idtask !== 3);
//   return newArray;
// };

// console.log(remove(2, tasklist));

// const mapTask3 = tasklist.filter((a)=> a.idtask ==! 2)

// console.log(mapTask3)

// update
//

const priorityFunc = (tasklist, priorityId) => {
  const newArray = tasklist.filter(
    (priority) => priority.priorityId !== priorityId
  );
  return newArray;
};

const priorityFunc2 = priorityFunc(tasklist, 2);



console.log(priorityFunc2);
