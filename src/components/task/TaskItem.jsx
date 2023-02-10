import { useContext } from 'react'
import { FaTimes, FaPencilAlt } from 'react-icons/fa';
import Button from '../shared/Button'
import TaskContext from '../../context/task/TaskContext';
import TaskConstants from '../../context/task/TaskConstants';
import TaskActions from '../../context/task/TaskActions';
import SpinnerContext from '../../context/spinner/SpinnerContext';
import Card from '../shared/Card';

const TaskItem = ({ task }) => {

    const { setLoading } = useContext(SpinnerContext)
    const { dispatch } = useContext(TaskContext)

    const handleRemoveTask = async (e) => {
        try {
            setLoading(true)

            await TaskActions.remove(task._id)

            dispatch({ type: TaskConstants.REMOVE, payload: task })

        } catch (error) {
            window.alert(`Error Occurred: ${error.message}`)
        } finally {
            setLoading(false)
        }
    }
    const handleEditTask = (e) => {
        dispatch({ type: TaskConstants.SET_TASK, payload: task })
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
