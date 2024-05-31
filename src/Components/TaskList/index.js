import Task from "../Task/index"
import "./index.css"

const TaskList = (props) => {
    const {taskList,deleteItem} = props

    const idAt = (id) => {
        deleteItem(id)
    }
    return (
        <ul className="task-list">
            {taskList.map(eachTask => (
                <Task key={eachTask.id} name={eachTask.name} id={eachTask.id} status={eachTask.status} del={idAt} />
            ))}
        </ul>
    )
}

export default TaskList