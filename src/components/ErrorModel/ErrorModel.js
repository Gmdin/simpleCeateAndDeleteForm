import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from './ErrorModel.module.css';

const ErrorModel=props=>{
    return(
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}/>
            <Card className={classes.model}>
                <header className={classes.header}>
                    <h2>{props.title}</h2></header>
                <div className={classes.content}>
                   <p>{props.content}</p> 
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>oky</Button>
                </footer>
            </Card>
        </div>
    )
}
export default ErrorModel;