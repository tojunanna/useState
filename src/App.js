import "./App.css";
import { useState } from "react";

// import { Task } from "./Task";

// function App() {
//   const [todoList, setTodoList] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const handleChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const addTask = () => {
//     const task = {
//       id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
//       taskName: newTask,
//       completed: false,
//     };
//     setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
//   };

//   const deleteTask = (id) => {
//     setTodoList(todoList.filter((task) => task.id !== id));
//   };

//   const completeTask = (id) => {
//     setTodoList(
//       todoList.map((task) => {
//         if (task.id === id) {
//           return { ...task, completed: true };
//         } else {
//           return task;
//         }
//       })
//     );
//   };

//   return (
//     <div className="App">
//       <div className="addTask">
//         <input onChange={handleChange} />
//         <button onClick={addTask}> Add Task</button>
//       </div>
//       <div className="list">
//         {todoList.map((task) => {
//           return (
//             <Task
//               taskName={task.taskName}
//               id={task.id}
//               completed={task.completed}
//               deleteTask={deleteTask}
//               completeTask={completeTask}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }
// function App() {
//   const [textColor, setTextColor] = useState("BLACK");

//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           setTextColor(textColor === "black" ? "red" : "black");
//         }}
//       >
//         {" "}
//         Show/Hide
//       </button>
//       <h1 style={{ color: textColor }}> Hi this better show </h1>
//     </div>
//   );
// }

function App() {
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("BLACK");

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        {" "}
        Show/Hide
      </button>
      {showText && <h1> Click on Show/Hide Button and see whats happens </h1>}

      <button
        onClick={() => {
          setTextColor(textColor === "black" ? "red" : "black");
        }}
      >
        {" "}
        Black/Red
      </button>
      <h1 style={{ color: textColor }}>
        Change Text COLOR to respect the STATE{" "}
      </h1>
    </div>
  );
}

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };
//   return (
//     <div className="App">
//       <input type="text" onChange={handleInputChange} />
//       {inputValue}
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);
//   const increase = () => {
//     setCount(count + 1);
//   };
//   const decrease = () => {
//     setCount(count - 1);
//   };
//   const setToZero = () => {
//     setCount(0);
//   };

//   return (
//     <div className="App">
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Decrease</button>
//       <button onClick={setToZero}>Set to Zero</button>
//       <br></br>
//       {count}
//     </div>
//   );
// }

// function App() {
//   const names = ["Math", "John", "Who", "mIKE", "JANE", "Paul"];
//   return (
//     <div className="App">
//       {names.map((name, key) => {
//         return <h1 key={key}> {name}</h1>;
//       })}
//     </div>
//   );
// }

// const planets = [
//   { name: "Mars", isGasPlanet: false },
//   { name: "Earth", isGasPlanet: false },
//   { name: "Jupiter", isGasPlanet: true },
//   { name: "Venus", isGasPlanet: false },
//   { name: "Neptune", isGasPlanet: true },
//   { name: "Uranus", isGasPlanet: true },
// ];

// function App() {
//   return (
//     <div className="App">
//       {planets.map(
//         (planet, key) => !planet.isGasPlanet && <h1> {planet.name} </h1>
//       )}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Job salary={90000} position="Senior SDE" company="Amazon" />
//       <Job salary={12000} position="Junior SDE" company="Google" />
//       <Job salary={10000} position="Project Manager" company="Netflix" />
//     </div>
//   );
// }

// const Job = (props) => {
//   return (
//     <div>
//       <h1> {props.salary}</h1>
//       <h1> {props.position}</h1>
//       <h1> {props.company}</h1>
//     </div>
//   );
// };

export default App;
