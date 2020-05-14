import React from 'react';
import { Link } from '@reach/router';


export default function NavBar() {

    return (
        <nav className="navbar bg-dark">
            <h1>Routing Practice</h1>
            <ul>
                <li>
                    <Link to='/'>Main</Link>
                </li>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/4'>Go see a number</Link>
                </li>
                <li>
                    <Link to='/hello'>Go see a word</Link>
                </li><li>
                    <Link to='/word/color/bg'>Go see a color</Link>
                </li>
            </ul>
        </nav>
    )
}