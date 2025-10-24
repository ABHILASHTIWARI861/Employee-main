import React ,{useContext} from "react";
import { AuthContext } from "../../context/AuthProvider";

function All_task(){

   const [user_data,set_user_data]=useContext(AuthContext)

    return(
        <div className="all_tasks">
         <div id="tasks_list">
            <h3>Employee Name</h3>
            <h3>New Task</h3>
            <h3>Active Task</h3>
            <h3>Completed</h3>
            <h3>Failed</h3>
         </div>
         <div className="my_box">
         {user_data.map(function(elem,idx){
            return (<div key={idx} id="tasks_item">
            <h3 className="item1">{elem.firstname}</h3>
            <h3 className="item2">{elem.taskStats.newTask}</h3>
            <h3 className="item3">{elem.taskStats.active}</h3>
            <h3 className="item4">{elem.taskStats.completed}</h3>
            <h3 className="item5">{elem.taskStats.failed}</h3>
         </div>)
         })}   
         </div>                           
        </div>
    )
}

export default All_task;