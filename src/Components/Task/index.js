import { Component } from "react";
import { AiFillDelete } from "react-icons/ai";
import "./index.css"

class Task extends Component {
    state = {
        namevalue: this.props.name,
        statusvalue: this.props.status
    }

    onChangeValue = (event) => {
        this.setState({namevalue: event.target.value})
    }

    onChangeStatus = () => {
        this.setState(prevState => ({
            statusvalue: !prevState.statusvalue
        }))
    }

    onDelete = () => {
        const {del,id} = this.props
        del(id)
    }


    render() {
        const {namevalue,statusvalue} = this.state
        return (
            <li className="task-item">
                <input type="checkbox" className="checkbox-input" onChange={this.onChangeStatus} />
                <div className="task-container">
                    <input type="text" value={namevalue} className={statusvalue ? 'checked-name' : 'name'} onChange={this.onChangeValue} />
                    <AiFillDelete className="delete-icon" onClick={this.onDelete} />
                </div>
            </li>
        )
    }
}

export default Task