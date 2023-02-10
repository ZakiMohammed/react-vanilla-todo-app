import { useContext } from 'react'
import { FaFrown } from 'react-icons/fa'
import TaskContext from '../../context/task/TaskContext'

const TaskEmpty = () => {

    const { tasks } = useContext(TaskContext)

    return (
        tasks.length === 0 && (
            <div className='empty'>
                <FaFrown size={30} />
                Nothing added to the list
            </div>
        )
    )
}

export default TaskEmpty
