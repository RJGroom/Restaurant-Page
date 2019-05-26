import React from 'react';

const Menu = () => {
    return (
        <div className="menu">

            <div className="menu-header">
                <h2 className="menu-logo">Food Shack</h2>
                <h3>Menu</h3>
            </div>

            <div className="burger-section">
                <h4>Burgers</h4>
                <ul>
                    <li>
                        <h5>Rodeo Burger</h5>
                        <p>Description:</p>
                    </li>
                    <li>
                        <h5>Veggie Burger</h5>
                        <p>Description:</p>
                    </li>
                    <li>
                        <h5>Hawaiin Burger</h5>
                        <p>Description:</p>
                    </li>
                    <li>
                        <h5>Cheeseburger</h5>
                        <p>Description:</p>
                    </li>
                    <li>
                        <h5>Classic Burger</h5>
                        <p>Description:</p>
                    </li>
                </ul>
            </div>

            <div className="sandwich-section">
                <h4>Sandwiches</h4>
                <ul>
                    <li>
                        <h5>Ruben</h5>
                        <p>Description:</p>
                    </li>
                    <li>
                        <h5>Turkey Sandwich</h5>
                        <p>Description:</p>
                    </li>
                    <li>
                        <h5>Ham and Cheese</h5>
                        <p>Description:</p>
                    </li>
                </ul>
            </div>

            <div className="hotdog-section">
                <h4>Hotdogs</h4>
                <ul>
                    <li>
                        <h5>Chili Cheese Dog</h5>
                        <p>Description:</p>
                    </li>
                    <li>
                        <h5>Bratwurst</h5>
                        <p>Description:</p>
                    </li>
                    <li>
                        <h5>Classic Hot Dog</h5>
                        <p>Description:</p>
                    </li>
                </ul>
            </div>

            <div className="dessert-section">
                <h4>Desserts</h4>
                <ul>
                    <li>
                        <h5>Chocolate Raspberry Cheesecake</h5>
                        <p>Description:</p>
                    </li>
                    <li>
                        <h5>Hot Fudge Sundae</h5>
                        <p>Description:</p>
                    </li>
                    <li>
                        <h5>Deep Fried Oreos</h5>
                        <p>Description:</p>
                    </li>
                </ul>
            </div>

            <div className="beverage-section">
                <h4>Beverages</h4>
                <ul>
                    <li>
                        <h5>Soft Drinks</h5>
                        <p>List of Soft Drinks</p>
                    </li>
                    <li>
                        <h5>Teas</h5>
                        <p>List of Teas</p>
                    </li>
                    <li>
                        <h5>Alcoholic Beverages</h5>
                        <p>List of Alcoholic Beverages</p>
                    </li>
                </ul>
            </div>

            <div className="specials-section">
                <h4>Specials</h4>
                <ul>
                    <li>
                        <h5>Lunch Special (12PM - 2PM)</h5>
                        <p>Describe Special</p>
                    </li>  
                    <li>
                        <h5>Drink Special (7PM - 10PM)</h5>
                        <p>Describe Special</p>
                    </li>  
                    <li>
                        <h5>Wing Night (Wednesdays 5PM - 8PM)</h5>
                        <p>Describe Special</p>
                    </li>   
                    <li>
                        <h5>Kids Special (All Day)</h5>
                        <p>Kids under the age of 5 eat free</p>
                    </li>  
                </ul>
            </div>
        </div>
    )
}

export default Menu;