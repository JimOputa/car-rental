"use client";
import { useState } from "react";

export default function Form({ createTask }) {
  const [taskName, setTaskName] = useState("");

  function handleTaskInput(event) {
    setTaskName(event.target.value);
  }

  function handleButtonClick() {
    createTask(taskName);
    setTaskName("");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-[10px]">
        <span>Create Task</span>
        <textarea
          value={taskName}
          onChange={handleTaskInput}
          className="border-2 p-[10px] rounded-[5px]"
        />
        <button
          onClick={() => (taskName === "" ? null : handleButtonClick())}
          className={
            "w-fit self-end px-[20px] py-[10px] bg-amber-200 rounded-[2px] " +
            (taskName === "" ? null : "cursor-pointer")
          }
        >
          Create
        </button>
      </div>
    </form>
  );
}
