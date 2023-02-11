import { useContext } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import Button from '../shared/Button'
import TaskContext from '../../context/task/TaskContext'
import SpinnerContext from '../../context/spinner/SpinnerContext'
import TaskActions from '../../context/task/TaskActions'
import TaskConstants from '../../context/task/TaskConstants'

const TaskClear = () => {

    const { tasks, dispatch } = useContext(TaskContext)
    const { loading, setLoading } = useContext(SpinnerContext)

    const handleRemoveTask = async (e) => {
        try {
            if (!window.confirm('Are you sure you want to remove all the tasks?')) {
                return;
            }

            setLoading(true)

            await TaskActions.removeAll()

            dispatch({ type: TaskConstants.REMOVE_ALL })

        } catch (error) {
            window.alert(`Error Occurred: ${error.message}`)
        } finally {
            setLoading(false)
        }
    }

    return (
        (tasks.length !== 0 || !loading) && (
            <>
                <Button className='btn-clear' handleClick={handleRemoveTask}>
                    <FaTrashAlt /> Clear All
                </Button>
            </>
        )
    )
}

export default TaskClear
