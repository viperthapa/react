import React from 'react';
import { Link,NavLink,withRouter } from 'react-router-dom';



const Navbar = (props) => {
    console.log(props)
    // setTimeout( () => {
    //     props.history.push('/about')
    // },2000)
    return(
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <a className="brand-logo">Nepalese Times</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><Link to="/contact">contact</Link></li>


                </ul>

            </div>

        </nav>
    )
}

export default withRouter(Navbar)