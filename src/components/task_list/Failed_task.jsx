import React from "react"

function Failed_task({data}){
    return(
        <div className="tasklist_component failed_one">
        <div className="task_lists">
      <div className="task_list_header" >
       <h4 className="task_button">{data.category}</h4>
       <h4  className="Task_date">{data.date}</h4>
      </div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
       <div className="fail_task">
        <button>Failed Task</button>
       </div>
        </div>  
        </div>     
    )
}

export default Failed_task;