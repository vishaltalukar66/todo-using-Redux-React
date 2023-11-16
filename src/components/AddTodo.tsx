import { useState } from "react";
import { addTodo } from "../Redux/states/TodoSlice";
import { useDispatch } from "react-redux";

export const AddToDo = () => {
    const [inputs, setInputs] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addTodo(inputs));
        setInputs('');
    }
    return (
        <>
            <div className="max-w-xs p-4 bg-white shadow-md rounded-md overflow-hidden mx-auto my-4">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-x-28">
                        <div>
                            <input type="text" required onChange={(e) => { setInputs(e.target.value) }} value={inputs} className="ml-1 text-black w-44 rounded-md border-2 border-black p-1" placeholder="Add Task" />
                        </div>
                        <div>
                            <button className="shadow-sm bg-blue-500/10 p-1 rounded-md">
                                <h4 className=" text-xl">
                                    Add Task
                                </h4>
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

function dispatch(arg0: { payload: any; type: "todo/addTodo"; }) {
    throw new Error("Function not implemented.");
}
