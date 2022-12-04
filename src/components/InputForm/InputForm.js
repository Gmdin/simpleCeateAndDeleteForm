import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from './InputForm.module.css';
import ErrorModel from "../ErrorModel/ErrorModel";
import { useState } from "react";
const InputForm=(props)=>{
const [name,setName]=useState('');
const [age,setAge]=useState('');
const [error,setError]=useState();
    const handleNameField=event=>{
            setName(event.target.value);
    }
    const handleAgefield=event=>{
            setAge(event.target.value);
    }

    const submintHandler=event=>{
        event.preventDefault();
        if(name.trim().length===0 || age.trim().length===0){
            setError({
                title:"Invalid Input",
                message:"Name and age must be entered"
            })
        }
        else if(+age<1){
            setError({
                title:"Invalid Age",
                message:"Age must be >0"
            })
        }
        else{
            props.onFormSubmit(name,age);
            setAge('');
            setName('');
        }
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
            <input type='text' id="username" value={name} onChange={handleNameField}/>
            <label htmlFor="age">Age(years)</label>
            <input type='number' id="age" value={age} onChange={handleAgefield}/>
            <Button type="submit">Add user</Button>
        </form>
        </Card>
        </div>
    )
}
export  default InputForm;