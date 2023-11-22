import { useDispatch } from "react-redux"
import { logInUser } from "redux/slices/operations"
export const LoginPage = ()=>{
    const dispatch = useDispatch()
    const addUser = (e)=>{
        e.preventDefault()
        const form = document.forms['login']
    const user = {email: form.elements.email.value,
    password:  form.elements.password.value }   
      dispatch(logInUser(user))
       form.reset()
    }
    return <><h1>Login page</h1>
    <form name="login" onSubmit={addUser}>
       <label>Email<input type="text" name="email"/></label> 
      <label>Password <input type="text" name="password"/></label> 
        <button type="submit">type to login</button>
    </form></>
}