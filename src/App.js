import './App.css';
import { useState } from 'react';
function App() {


let [todolist, setTodolist] = useState([])
  let saveToDoList = (event) =>{

    let toname = event.target.toname.value;
    if(!todolist.includes(toname))  {   //Prevents duplicates
      let finalDolist = [...todolist,toname]       // add name if no duplicate found
      setTodolist(finalDolist)
    
    
    }
    else{
      alert("Element already present in the list")
    }  
      event.preventDefault();                 //Cancel the event after calling

  }

  // Sending valus to the list
  let list = todolist.map((value,index)=>{
    return(
      <ToDolistItems value ={value} key ={index} indexNumber = {index}
      todolist={todolist}
      setTodolist ={setTodolist}
      />
    )
  })

  return (
    <div className="App">
      <h1>ToDo list</h1>
      <form onSubmit={saveToDoList}>
        <input type='text' name='toname'/><button>Save</button>
      </form>


      {/* this is UI after Save */}
      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>



    </div>
  );
}

export default App;

// Delete row function for removing row
function ToDolistItems({ value, indexNumber, todolist, setTodolist }) {
  let [status, setStatus] = useState(false)

  let deleteRow =() => {
  let finalData = todolist.filter((v,i) => i!==indexNumber)
  setTodolist(finalData)
}


let checkStatus = () => {
  setStatus(!status)

}
  return(
    <li className ={(status)? 'completetodo': '' } onClick={checkStatus}>{indexNumber + 1} {value} <span onClick={deleteRow}> &times;</span></li> 
  )
}
