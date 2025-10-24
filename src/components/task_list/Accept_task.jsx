import React from "react"

function Accepted_task({data}){
  console.log(data)
    return(
 <div className="tasklist_component new_one">
 <div className="task_lists">
<div className="task_list_header" >
<h4 className="task_button">{data.category}</h4>
<h4  className="Task_date">{data.date}</h4>
</div>
<h2>{data.title}</h2>
<p>{data.description}</p>

 <div className="Accepted_tasks">
   <div className="complete_mark">
   <button>Mark as Completed</button>
   </div>
   <div className="failed_mark">
    <button>Mark as Failed</button>
   </div>
 </div>
 </div>
 </div>    
    )
}

export default Accepted_task;