import { useRouteError } from 'react-router-dom'
import './ErrorPage.css'

export const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="container">
            <h1 className="title">Ops!</h1>
            <p className="message">Temos um problema</p>
            <div className="errorContainer">
                <p className="statusText">{error.statusText}</p>
                
            </div>
        </div>
    );
};

