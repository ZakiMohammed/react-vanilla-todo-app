import { FaTrashAlt } from 'react-icons/fa'
import Button from '../shared/Button'
import TaskService from '../../services/task/TaskService'

const TaskClear = ({ tasks, removeAll, loading, setLoading }) => {
    
    const handleRemoveTask = async (e) => {
        try {
            if (!window.confirm('Are you sure you want to remove all the tasks?')) {
                return;
            }
            setLoading(true)

            await TaskService.removeAll()

            removeAll();

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
