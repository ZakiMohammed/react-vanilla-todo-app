import { useContext } from 'react'
import { FaSpinner } from 'react-icons/fa'
import SpinnerContext from '../context/spinner/SpinnerContext'

const Spinner = () => {

    const { loading } = useContext(SpinnerContext)

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
