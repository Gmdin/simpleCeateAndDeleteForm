
import { useState } from 'react';
import InputForm from './components/InputForm/InputForm';
import UserList from './components/InputForm/UserList';
function App() {
  const [showList,setShowList]=useState([]);
const getFormData=(nName,nAge)=>{
  setShowList((previusList)=>{
      return [...previusList,{name:nName,age:nAge,id:Math.random().toString()}];
  })
};
  return (
    <div>
     <InputForm onFormSubmit={getFormData}/>
     <UserList itemShow={showList}/>
    </div>
  );
}

export default App;
