const Header = ({addTask, newTask, setNewTask})=>{
    return (
        <div>
            <h1>To do app</h1>
            <form onSubmit={e=>addTask(e)}>
                <input 
                    type="text"
                    placeholder="Add new task" 
                    onChange={e=>{setNewTask(e.target.value)}}
                    value={newTask}                />
                <button type="submit">Add task</button>
            </form>
        </div>
    )
}

export default Header