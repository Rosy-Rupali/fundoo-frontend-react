import React from 'react';
import TextField from '@material-ui/core/TextField';
import '../css/SideNavbar.css'


function Sidenav(){
 const [name, setName] = React.useState('rosy')

 const [age, setAge] = React.useState(25)

 const setDetails = () =>{
     setName('shravan')
 }

    return(
        <>
        <div className="header">
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <p>i am from side nav</p>
        <button onClick={setDetails}>submit</button>
        <div>
            {name}, {age}
        </div>
        </div>
        </>
    )
}
export default Sidenav;