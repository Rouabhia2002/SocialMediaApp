import "./login.scss"
import { Link } from 'react-router-dom'; // Import Link from React Router


const login = () => {
  return (
    <div className='login' >
        <div className='card' >
    <div className="left">
    <h1>hello word. </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam accusantium voluptate omnis magni consequatur deleniti quasi impedit odio explicabo, accusamus hic ex quidem molestias nisi dicta deserunt dignissimos dolorum aut.</p>
            <span>lorem mlmflmdlv  kfd</span>
            <button>Register</button>
            
    </div>
    <div className="right">
            <h1>login</h1>

            <input type="text"  placeholder="Username"/>
            <input type="text" placeholder="password"/>
            <Link to ="/register">
            <button>register</button>
            </Link>
        </div>






    </div>
    </div>

  )
}

export default login
