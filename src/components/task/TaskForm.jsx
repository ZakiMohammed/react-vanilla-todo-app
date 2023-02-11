import { useState, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import Button from '../shared/Button'
import TaskService from '../../services/task/TaskService'

const TaskForm = ({ task, add, update, setLoading }) => {

    const [title, setTitle] = useState('')

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
                const updatedTask = await TaskService.update(task._id, dto)

                update(updatedTask);
            } else {
                const dto = { title };
                const newTask = await TaskService.add(dto)

                add(newTask);
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
