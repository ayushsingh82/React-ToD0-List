import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
const ToDoList=(props)=>{


    return ( <>
   <div className="todo_style">
   {/* <i class="fa fa-times " aria-hidden="true"
   onClick={()=>{
    props.onSelect(props.id)
   }}
    /> */}
    <FontAwesomeIcon icon={faCircleXmark} onClick={()=>{props.onSelect(props.id)}}/>
    <li>{props.text} </li>
    </div>
     </>
    );
};

export default ToDoList;