import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function Create_task(){

    const [user_data,set_user_data]=useContext(AuthContext)

    const[title,set_TaskTitle]=useState('');
    const[description,set_taskDescription]=useState('');
    const[date,set_taskDate]=useState('');
    const[AssignTo,set_AssignTo]=useState('');
    const[category,set_catagory]=useState('');

    const[new_task,setTask]= useState({})



    function Submit_Handler(e){
        e.preventDefault();
        setTask({title,description,date,category,active:false,newTask:true,completed:false,failed:false})
        console.log("new taqsk",new_task);


        const data=user_data;
        console.log(data);
    
        

        data.forEach(function(e){
          if(AssignTo==e.firstname){
            console.log(e);
            e.tasks.push(new_task)
            console.log(e);
            e.taskStats.newTask=e.taskStats.newTask+1;

          }
        })

        set_user_data(data);
        
        set_TaskTitle('');
        set_catagory('');
        set_AssignTo('');
        set_taskDate('');
        set_taskDescription('');
    }



    return (
        
           <form onSubmit={Submit_Handler}
             action="" className='task_form'>
                <div className='task_container'>
            <div className='tasks'>
        <div>
            <h3>Task Title</h3>
            <input value={title} onChange={(event=>{
                set_TaskTitle(event.target.value);
            })} type="text" placeholder='Make a UI design' />
        </div>
        <div>
            <h3>Date</h3>
            <input value={date} onChange={(event=>{
                set_taskDate(event.target.value)
            })}type="date" placeholder='' />
        </div>
        <div>
            <h3>Assign to</h3>
            <input value={AssignTo} onChange={(event=>{
                set_AssignTo(event.target.value);
            })}
            type="text" placeholder='Employee Name' />
        </div>        
        <div>
            <h3>Catagory</h3>
            <input value={category} onChange={(event=>{
                set_catagory(event.target.value);
            })}type="text" placeholder='design,dev,etc' />
        </div>
            </div>


        <div className='task_description'>
        <div>
            <h3>Description</h3>
        <textarea value={description} 
        onChange={(event=>{
            set_taskDescription(event.target.value);
        })}
        className="description_box" type="text"  />
        </div>
        <div className='task_creation'>
        <p><button>Create Task</button></p>
        </div>
        </div>
        </div>
        </form>
       

    )
}

export default Create_task;



