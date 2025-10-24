import React from 'react';
import Header from '../other/header';
import Create_task from '../other/createTask';
import All_task from '../other/Alltask';

function AdminDashboard(props){
    return (
        <div className='AdminDashboard'>
         <Header change_user={props.change_user}/>
         <Create_task/>
         <All_task/>
         </div>
    );
}

export default AdminDashboard;


