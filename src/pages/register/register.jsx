import "./register.scss"
import { Link } from 'react-router-dom'; // Import Link from React Router

const register = () => {
  return (
    <div className='register' >
        <div className='card' >
    <div className="left">
    <h1>hello word. </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam accusantium voluptate omnis magni consequatur deleniti quasi impedit odio explicabo, accusamus hic ex quidem molestias nisi dicta deserunt dignissimos dolorum aut.</p>
            <span>DO YOU HAVE AN ACCOUNT</span>
            <Link to ="/login">
            <button>login</button>
            </Link>
    </div>
    <div className="right">
            <h1>Register</h1>

            <input type="text"  placeholder="Username"/>
            <input type="text"  placeholder="email"/>
            <input type="text" placeholder="password"/>
            <input type="text"  placeholder="Name"/>
            <button>REGISTER</button>
            
        </div>






    </div>
    </div>

  )
}

export default register
