import React from "react";
import New_task from "./NewTask";
import Accepted_task from "./Accept_task";
import Completed_task from "./completeTask"
import Failed_task from "./Failed_task";




function Tasklist({data}){
 
  
    return(
    <div className="Tasklist_container">
      {data.tasks.map((elem,idx)=>{
      if(elem.active){
      return <Accepted_task key={idx} data={elem}/>
      }
      if(elem.newTask){
      return <New_task key={idx}  data={elem}/>
      }
      if(elem.completed){
      return <Completed_task key={idx}  data={elem}/>
      }
      if(elem.failed){
      return<Failed_task key={idx} data={elem}/>
      }
      })}
    </div>
    )
}

export default Tasklist;