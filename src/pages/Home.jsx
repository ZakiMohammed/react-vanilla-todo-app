import { useState } from 'react'
import TaskList from '../components/task/TaskList'
import TaskForm from '../components/task/TaskForm'
import TaskEmpty from '../components/task/TaskEmpty'
import TaskClear from '../components/task/TaskClear'

const Home = ({ loading, setLoading }) => {

    const [task, setTask] = useState(null)
    const [tasks, setTasks] = useState([])

    const getAll = tasks => {
        setTasks(tasks)
    };
    const add = newTask => {
        setTasks([newTask, ...tasks])
    };
    const update = task => {
        setTasks(tasks.map(i => i._id === task._id ? i = task : i))
        setTask(null);
    };
    const remove = _id => {
        setTasks(tasks.filter(i => i._id !== _id));
    };
    const removeAll = () => {
        setTasks([]);
    };
    const setSingleTask = task => {
        setTask(task);
    };

    return (
        <>
            <TaskForm task={task} add={add} update={update} setLoading={setLoading} />
            <TaskClear tasks={tasks} removeAll={removeAll} loading={loading} setLoading={setLoading} />
            <TaskList tasks={tasks} getAll={getAll} remove={remove} setSingleTask={setSingleTask} loading={loading} setLoading={setLoading} />
            <TaskEmpty tasks={tasks} />
        </>
    )
}

export default Home
