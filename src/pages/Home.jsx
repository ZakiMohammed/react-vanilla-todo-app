import TaskList from '../components/task/TaskList'
import { TaskProvider } from '../context/task/TaskContext'
import TaskForm from '../components/task/TaskForm'
import TaskEmpty from '../components/task/TaskEmpty'
import TaskClear from '../components/task/TaskClear'

const Home = () => {

    return (
        <TaskProvider>
            <TaskForm />
            <TaskClear />
            <TaskList />
            <TaskEmpty />
        </TaskProvider>
    )
}

export default Home
