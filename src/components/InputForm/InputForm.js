import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from './InputForm.module.css';
import { useState } from "react";
const InputForm=(props)=>{
const [name,setName]=useState('');
const [age,setAge]=useState('');
    const handleNameField=event=>{
            setName(event.target.value);
    }
    const handleAgefield=event=>{
            setAge(event.target.value);
    }

    const submintHandler=event=>{
        event.preventDefault();
        if(name==='' && age===''){
            alert("Username and age must be required");
        }
        else if(name===''){
            alert('Username must be entered');
        }
        else if(age===''){
            alert('Age must be entered');
        }
        else{
            setAge('');
            setName('');
        }
    }

    return(
        <Card className={classes.input}>
        <form onSubmit={submintHandler}>
            <label htmlFor='username' >Username</label>
            <input type='text' id="username" value={name} onChange={handleNameField}/>
            <label htmlFor="age">Age(years)</label>
            <input type='number' id="age" value={age} onChange={handleAgefield}/>
            <Button type="submit">Add user</Button>
        </form>
        </Card>
    )
}
export  default InputForm;