import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import { useEffect, useState } from "react";

function App() {
  // console.log(tasks);

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">

       <TaskForm/>
      <TaskList/>
      </div>
    </main>
  );
}

export default App;
