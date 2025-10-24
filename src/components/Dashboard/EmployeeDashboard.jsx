import React from 'react';
import Task_list_number from '../other/Task_list_number';
import Header from '../other/header';
import Tasklist from '../task_list/Task_list';

function EmployeeDashboard(props){
    console.log(props);
    return(
        <div className='EmployeeDashboard'>
            <Header change_user={props.change_user}  data={props.data}/>
            <Task_list_number data={props.data}/>
            <Tasklist data={props.data}/>
        </div>
    )
}
export default EmployeeDashboard;
