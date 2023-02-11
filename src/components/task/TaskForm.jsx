import { useState, useContext, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import Button from '../shared/Button'
import TaskContext from '../../context/task/TaskContext'
import TaskConstants from '../../context/task/TaskConstants'
import SpinnerContext from '../../context/spinner/SpinnerContext'
import TaskActions from '../../context/task/TaskActions'

const TaskForm = () => {

    const [title, setTitle] = useState('')
    const { task, dispatch } = useContext(TaskContext)
    const { setLoading } = useContext(SpinnerContext)

    useEffect(() => {
        if (task) {
            setTitle(task.title)
        }        
    }, [task])

    const handleTitleChange = (e) => setTitle(e.target.value)
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            if (title === '') {
                window.alert('Please enter title of your task');
                return;
            }

            setLoading(true)

            if (task) {
                const dto = { ...task, title }
                const updatedTask = await TaskActions.update(task._id, dto)

                dispatch({ type: TaskConstants.UPDATE, payload: updatedTask })
            } else {
                const dto = { title };
                const newTask = await TaskActions.add(dto)

                dispatch({ type: TaskConstants.ADD, payload: newTask })
            }

        } catch (error) {
            window.alert(`Error Occurred: ${error.message}`)
        } finally {
            setLoading(false)
            setTitle('')
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter you task"
                value={title}
                onChange={handleTitleChange} />
            <Button type='submit'>
                <FaPlus />
            </Button>
        </form>
    )
}

export default TaskForm
