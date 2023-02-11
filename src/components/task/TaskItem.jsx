import { FaTimes, FaPencilAlt } from 'react-icons/fa';
import Button from '../shared/Button'
import TaskService from '../../services/task/TaskService';
import Card from '../shared/Card';

const TaskItem = ({ task, remove, setSingleTask, setLoading }) => {
    const handleRemoveTask = async (e) => {
        try {
            setLoading(true)

            await TaskService.remove(task._id)

            remove(task._id);

        } catch (error) {
            window.alert(`Error Occurred: ${error.message}`)
        } finally {
            setLoading(false)
        }
    }
    const handleEditTask = (e) => {
        setSingleTask(task)
    }

    return (
        <Card>
            <Button className='btn-remove' handleClick={handleRemoveTask}>
                <FaTimes />
            </Button>
            <Button className='btn-edit' handleClick={handleEditTask}>
                <FaPencilAlt />
            </Button>
            <p>{task.title}</p>
        </Card>
    )
}

export default TaskItem
