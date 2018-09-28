import React from 'react';
import "./styles.css";

/* Simplifying the function the two ways give a return

const Header = () => {
    return ()
};
___________________

const Header = () => (
    <h1>Hello</h1>
);

*********** =

class Header extends Components {
    return(){
        return <header id="main-header">JSHunt</header>
    }
}

*/

const Header = () => <header id="main-header">JSHunt</header>;

export default Header;