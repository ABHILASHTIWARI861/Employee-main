import React from "react";

function Task_list_number({data}){
    return(
    <div className="Box-task">


    <div className="Box-task_c task1" style={{
        backgroundColor:"#EF5350"
    }}>
     <h1>{data.taskStats.newTask}</h1>
     <h1>New Task</h1>
    </div>


    <div className="Box-task_c task2" style={{
        backgroundColor:"#42A5F5"
    }}>
     <h1>{data.taskStats.completed}</h1>
     <h1>Completed Task</h1>
    </div>


    <div className="Box-task_c task3" style={{
        backgroundColor:"#66BB6A"
    }}>
     <h1>{data.taskStats.active}</h1>
     <h1>Accepted Task</h1>
    </div>

    <div className="Box-task_c task4" style={{
        backgroundColor:"#FFEB3B"
    }}>
     <h1>{data.taskStats.failed}</h1>
     <h1>Failed Task</h1>
    </div>

    </div>
    )
}

export default Task_list_number;