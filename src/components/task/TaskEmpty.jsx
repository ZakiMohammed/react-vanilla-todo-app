import { FaFrown } from 'react-icons/fa'

const TaskEmpty = ({ tasks }) => {
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
