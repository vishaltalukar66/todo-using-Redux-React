import { useDispatch } from "react-redux";
import { removeTodo, setMark } from "../Redux/states/TodoSlice";

export const Display = (props: { id: string; value: string, mark: boolean }) => {
    const dispatch = useDispatch();


    return (
        <>

            <div className="max-w-xs p-4 bg-white shadow-md rounded-md overflow-hidden mx-auto my-4">


                {/* Display */}
                <div className="grid grid-flow-col">
                    <div>
                        <input
                            type="checkbox"
                            id='asd'
                            className="mr-2"
                            checked={props.mark as boolean}
                            onChange={() => {
                                dispatch(setMark(props.id))
                            }}
                        />
                    </div>
                    <div className="">
                        {props.mark ? (
                            <>
                                <label className="text-lg line-through font-semibold">{props.value}</label>
                            </>
                        ) : (
                            <>
                                <label className="text-lg font-semibold">{props.value}</label>
                            </>
                        )
                        }

                    </div>
                    <div>
                        <button
                            className="ml-2 text-red-500 hover:text-red-700"
                            onClick={() => { dispatch(removeTodo(props.id)) }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}