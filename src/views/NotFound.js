import React from 'react';
import Button from '../components/Generics/Button';

const NotFound = () => {
    return (
        <div className="notfound-container">
          <h1 className="center-content mt-5">404 - Page Not Found</h1>
            <div className="center-content mb-5 mt-5 ">
                <Button className="notfound-button" type="yellow" text="Go back to Home Page" url="/" />
            </div>
        </div>
    );
};

export default NotFound;
