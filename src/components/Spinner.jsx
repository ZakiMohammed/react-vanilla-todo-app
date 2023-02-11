import { FaSpinner } from 'react-icons/fa'

const Spinner = ({ loading }) => {
    return (
        loading &&
        <div className='loader'>
            <div>
                <FaSpinner size={60} className='' />
            </div>
        </div>
    )
}

export default Spinner
