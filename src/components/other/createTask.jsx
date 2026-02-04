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



 /*   function Submit_Handler(e){
        e.preventDefault();
        setTask({title,description,date,category,active:false,newTask:true,completed:false,failed:false})  // new_task me nya task ka object to bn gya,pr ye object update tabhi hoga jb websir rerendering hoga,ya to tum useEffect se kra lo,ya fir tum directly is object ko yha use kr lo,jaise niche kr rha hu.
                                                                                                           //UseEffect is not efficient,do baar kyu render krna website ko             
        console.log("new taqsk",new_task);


        const data=user_data;  //--->>ye line reference of (data == user_data) ko same kr deti hai
        console.log(data);
    
        

        data.forEach(function(e){
          if(AssignTo==e.firstname){
            console.log(e);
            e.tasks.push(new_task)    //--->> ye line data me nya document/task daal(push kr) rha hai,chuki "refrence" of both (data==user_data) is same ,jo bhi change tum data me karoge wo user_data me bhi ho ga.
                                    //-->>in simple word ,we are doing MUTATION here.
            console.log(e);           
            e.taskStats.newTask=e.taskStats.newTask+1; //-->> ye line data me naye task ka count badha rhi hai,chuki refrence of both (data==user_data) is same ,jo bhi change tum data me karoge wo user_data me bhi ho ga.
                                                       //-->>in simple word ,we are doing MUTATION here.
          }
        })
//mutate-->>Original notebook me directly likh diya
//Immutate-->>Pehle xerox banayi,Us copy me likha

//QUESTION-->>“Data mutate ho gaya(i.e data jha pahuchna tha wha shi se pahuch gya hai), to setState me mutated data ja raha hai (set_user_data(data);)
//phir UI kyu nahi update hoti?”

set_user_data(data); 

//Usestate ka logic samjho-->>
//setState data set karne ke liye nahi,
//React ko “signal” dene ke liye hota hai —
//aur signal sirf NEW reference se milta hai, aur hamara to reference badal hi nhi rha hai,i.e both (data=user_data) have same reference
//“Same reference means React will not re-render.”
        


        set_TaskTitle('');
        set_catagory('');
        set_AssignTo('');
        set_taskDate('');
        set_taskDescription('');
    }


Ek line me final truth

React ko farq nahi padta “andar kya badla”
React sirf ye dekhta hai:
👉 KYA KOI REFERENCE NAYA AAYA?

*/

function Submit_Handler(e){
    e.preventDefault();
    const new_task={
        category:category,
        date:date,
        title:title,
        description:description,
        active:false,
        newTask:true,
        completed:false,
        failed:false
    }
  


    set_user_data(prev_data=>prev_data.map((emp)=>{
        if(emp.firstname===AssignTo){
            return{
                ...emp,
                tasks:[...emp.tasks,new_task],  //immutability-->>spread operator se naya array bna ke de rha hai,jisme purane tasks bhi hai aur naya task bhi add ho gya hai.
                                                //Reference change ho gya hai,kyuki naya array bna hai.
                taskStats:{
                    ...emp.taskStats,
                    newTask:emp.taskStats.newTask+1
                }
            }
        }
        return emp;
    }))

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



// ❌ push (MUTATION) VS ✅ Spread (IMMUTABLE)

/* emp.tasks.push(newTask);
Purana array change ❌
Reference same ❌
React re-render skip ❌ kyuki reference same hai
*/

/* [...emp.tasks, newTask]
Purana array untouched ✅
Naya array bana ✅
Reference change ✅
React re-render ✅ kyuki reference change hai
*/