import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function login() {
const {userName, setUserName} = useState('');
const [password, setPassword] = useState('');

const {setUser} = useContext(UserContext);

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic here (e.g., API call)
        // On successful login, update the user context
        setUser({ userName });
        // Clear input fields
        setUserName('');
        setPassword('');
        

    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder='username' />
        <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default login