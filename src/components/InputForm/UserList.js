
import Card from '../UI/Card/Card';
import classes from './UserList.module.css';
const UserList=props=>{
    return(
        <Card className={classes.users}>
        <ul>
    { props.itemShow.map((user)=>(
        <li key={user.id}>
           {user.name} ({user.age} in years)
        </li>
    ))
}
        </ul>
        </Card>
    )
};
export default UserList;