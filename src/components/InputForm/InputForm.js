import Card from "../UI/Card/Card";
import classes from './InputForm.module.css';
const InputForm=(props)=>{

    const submintHandler=event=>{
        event.preventDefault();
    }

    return(
        <Card className={classes.input}>
        <form onSubmit={submintHandler}>
            <label htmlFor='username' >Username</label>
            <input type='text' id="username"/>
            <label htmlFor="age">Age(years)</label>
            <input type='number' id="age"/>
            <button type="submit">Add</button>
        </form>
        </Card>
    )
}
export  default InputForm;