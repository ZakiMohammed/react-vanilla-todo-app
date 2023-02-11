import { useEffect } from 'react'
import TaskItem from './TaskItem'
import TaskService from '../../services/task/TaskService'

const TaskList = ({ tasks, getAll, remove, setSingleTask, setLoading }) => {
    useEffect(() => {
        const getTasks = async () => {
            try {
                setLoading(true)

                const data = await TaskService.getAll()

                getAll(data)

            } catch (error) {
                window.alert(`Error Occurred: ${error.message}`)
            } finally {
                setLoading(false)
            }
        }

        getTasks()

    }, [])

    return (
        <div className='card-holder'>
            {tasks.map(task => (
                <TaskItem key={task._id} task={task} remove={remove} setSingleTask={setSingleTask} setLoading={setLoading} />
            ))}
        </div>
    )
}

export default TaskList
