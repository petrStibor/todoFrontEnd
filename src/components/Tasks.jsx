const Tasks = ({tasks,deleteTask, updateTask})=>{
    return(
        <div className="task-container">
            {
                tasks.length <= 0 ? 
                
                (<h1>Add some stuff to do...</h1>) 
                
                : 

                (
                <ul className="tasks">
                {tasks.map((task, _id)=>{
                    return (
                        <li key={_id} >
                            <div className="items">
                                <input type="checkbox" />
                                {task.item}     
                            </div>          
                            
                            <div className="btn-container">
                                <button className="btn" onClick={()=>{deleteTask(task._id)}}>Delete</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            )
            }
        </div>
    )
}

export default Tasks