import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import '../scss/LoginPage.scss'


function LoginPage() {

    const Navigate = useNavigate()

    const usernameInput = useRef();
    const passwordInput = useRef();
    const buttonElement = useRef();


    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    

    let savedUsername = localStorage.getItem('username');
    let savedPassword = localStorage.getItem('password');


    function login(){
        if(savedUsername === username && savedPassword === username){
            Navigate('/home')
        }
    }
    
    function createAccount(){

        if(username && password){
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            Navigate('/home')
        }        
        

        
    }

    

    return (
        
        <div className='Body'>
            <form className='LoginContainer'>
                <div className='UsernameContainer'>

                    <label 
                    htmlFor='username' 
                    className='UsernameLabel' 
                    >Username</label>

                    <input 
                    onChange={(e) => setUsername(e.target.value)}
                    ref={usernameInput}
                    type='text' 
                    id='username' 
                    className='Username'  
                    required 
                    maxLength={12} 
                    minLength={1} 
                    placeholder='Your username'
                    />

                </div>                
                <div className='PasswordContainer' >

                    <label 
                    htmlFor='password' 
                    className='PasswordLabel' >Password</label>

                    <input 
                    onChange={(e) => setPassword(e.target.value)}
                    ref={passwordInput}
                    type='password' 
                    id='password' 
                    className='Password' 
                    required  
                    maxLength={12} 
                    minLength={6} 
                    placeholder='Your password'
                    />
                    
                </div>
               <div className="ButtonContainer">

                   {

                   localStorage.getItem('username') && localStorage.getItem('password') ?
                     <button 
                        ref={buttonElement}
                        type='button'
                        onClick={login}    
                    >Login</button>
                     :
                     <button 
                        type='button' 
                        onClick={createAccount}
                        >Create Account</button>   
                }

                </div>
            </form>
        </div>
    )
}

export default LoginPage
