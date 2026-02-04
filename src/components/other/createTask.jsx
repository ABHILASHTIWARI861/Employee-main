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
  <form
    onSubmit={Submit_Handler}
    className="bg-white rounded-2xl shadow-lg p-6 mb-8"
  >
    <h2 className="text-xl font-semibold text-gray-800 mb-6">
      Create New Task
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Task Title */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Task Title
        </label>
        <input
          value={title}
          onChange={(e) => set_TaskTitle(e.target.value)}
          type="text"
          placeholder="Make a UI design"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Due Date
        </label>
        <input
          value={date}
          onChange={(e) => set_taskDate(e.target.value)}
          type="date"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Assign To */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Assign To
        </label>
        <input
          value={AssignTo}
          onChange={(e) => set_AssignTo(e.target.value)}
          type="text"
          placeholder="Employee Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Category
        </label>
        <input
          value={category}
          onChange={(e) => set_catagory(e.target.value)}
          type="text"
          placeholder="design / dev / management"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    {/* Description */}
    <div className="mt-6">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        Description
      </label>
      <textarea
        value={description}
        onChange={(e) => set_taskDescription(e.target.value)}
        rows="4"
        placeholder="Describe the task in detail..."
        className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Submit Button */}
    <div className="mt-6 flex justify-end">
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
      >
        Create Task
      </button>
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