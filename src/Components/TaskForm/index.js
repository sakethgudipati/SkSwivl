import {Component} from "react"
import {v4 as uuidv4} from "uuid"
import Navbar from "../Navbar/index"
import TaskList from "../TaskList/index"
import "./index.css"

class TaskForm extends Component {
    state = {
        taskList: [],
        name: '',
        status: false
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        const {name,status} = this.state
        const newTask = {
            id: uuidv4(),
            name,
            status        
        }
        this.setState(prevState => ({
            taskList: [...prevState.taskList, newTask],
            name: '', 
        }))
    }

    onInput = (event) => {
        this.setState({name: event.target.value})
    }

    delete = (id) => {
        const {taskList} = this.state
        const filteredresults = taskList.filter(eachTask => eachTask.id !== id)
        this.setState({taskList: filteredresults})
    }

    render() {
        const {name,taskList} = this.state
    
        return (
            <div className="bg-container">
                <Navbar />
                <div className="todo-container">
                    <h1 className="todo-create-head"><span className="todo-highlight-head">Create</span> a new <span className="todo-highlight-head">Task</span></h1>
                    <form className="todo-form" onSubmit={this.onSubmitForm}>
                        <input value={name} type="text" className="input-element" placeholder="What's in your mind?" onChange={this.onInput} />
                        <button className="add-button" type="submit">Add</button>
                    </form>
                    <div className="line-container">
                        <hr />
                    </div>
                    <h1 className="todo-create-head"><span className="todo-highlight-head">My</span> Tasks</h1>
                </div>
                <TaskList taskList={taskList} deleteItem={this.delete} />
                <div className="line-container">
                    <hr />
                </div>
                <button type="button" className="add-button" onClick={this.saveTodoList}>Save</button>
            </div>
        )
    }
}

export default TaskForm