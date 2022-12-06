import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from './InputForm.module.css';
import ErrorModel from "../ErrorModel/ErrorModel";
import { useState,useRef } from "react";
const InputForm=(props)=>{
// const [name,setName]=useState('');
// const [age,setAge]=useState('');
//UseRef hook instead of useState in input field refhook is used when we want to update the data.
//It only use for to view the data 
const inputNameRef=useRef();
const inputAgeRef=useRef();
const [error,setError]=useState();
    // const handleNameField=event=>{
    //         setName(event.target.value);
    // }
    // const handleAgefield=event=>{
    //         setAge(event.target.value);
    // }
    const submintHandler=event=>{
        event.preventDefault();
        const nameRef=inputNameRef.current.value;
        const ageRef=inputAgeRef.current.value;
        if(nameRef.trim().length===0 || ageRef.trim().length===0){
            setError({
                title:"Invalid Input",
                message:"Name and age must be entered"
            })
        }
        else if(+ageRef<1){
            setError({
                title:"Invalid Age",
                message:"Age must be >0"
            })
        }
        else{
            props.onFormSubmit(nameRef,ageRef);
         inputNameRef.current.value='';
         inputAgeRef.current.value='';
        }
        // if(name.trim().length===0 || age.trim().length===0){
        //     setError({
        //         title:"Invalid Input",
        //         message:"Name and age must be entered"
        //     })
        // }
        // else if(+age<1){
        //     setError({
        //         title:"Invalid Age",
        //         message:"Age must be >0"
        //     })
        // }
        // else{
        //     props.onFormSubmit(name,age);
        //     setAge('');
        //     setName('');
        // }
    }
    const errorHandler=()=>{
        setError(null);
    }

    return(
        <div>
       {error&&<ErrorModel title={error.title}  content={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={submintHandler}>
            <label htmlFor='username' >Username</label>
            <input type='text' id="username" ref={inputNameRef}/>
            {/* <input type='text' id="username" value={name} onChange={handleNameField}/> */}
            <label htmlFor="age">Age(years)</label>
            {/* <input type='number' id="age" value={age} onChange={handleAgefield}/> */}
            <input type='number' id="age" ref={inputAgeRef}/>
            <Button type="submit">Add user</Button>
        </form>
        </Card>
        </div>
    )
}
export  default InputForm;