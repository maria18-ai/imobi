import { useState, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';

export const Profile = () => {

    const [hasToken, setHasToken] = useState(localStorage.getItem("token"));
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // const handleLogout = () => {
    //     localStorage.removeItem("token");
    //     setHasToken(null);
    // };

    useEffect(() => {
        const token = localStorage.getItem("token");
        setHasToken(token);
    }, [hasToken]); // Atualizar sempre que hasToken mudar

    if (hasToken) {
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get('http://localhost:8080/user/getAll');
                    setData(response.data);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };
    
            fetchData();
        }, []);
    } else {
        console.log(error)
    }
    

    if (loading) return <div className='loading'>Carregando...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
    <>
        <div className="container">
            <div className="photo-size">
            <img src="" alt="" />
            </div>
        </div>
    </>
    )
}
