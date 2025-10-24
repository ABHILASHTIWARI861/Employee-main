import React from "react"

function New_task({data}){
    return(
        <div className="tasklist_component accepted_one"  >
         <div className="task_lists">
       <div className="task_list_header" >
        <div className="task_button">
        <h4 >{data.category}</h4>
        </div>
        <h4  className="Task_date">{data.date}</h4>
       </div>
       <h2>{data.title}</h2>
       <p>{data.description}</p>
         <div className="accepted_task">
            <button>Accepted Task</button>
         </div>
         </div>  
         </div>
    )
}

export default New_task;

 