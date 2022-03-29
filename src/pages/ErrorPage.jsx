import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <>
        <h3>
            Страница не найдена
        </h3>
        <Button onClick={() => navigate("../", { replace: true })} variant='secondary'>Вернутся на главную</Button>
        </>
        

    );
}

export default ErrorPage;