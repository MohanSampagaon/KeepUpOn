import React from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleClick = (person: string)=>{
        sessionStorage.setItem('username', person);
        navigate('/overview', { state: { person: person } });
    }
    
    return (
        <div className="container-fluid vh-100">
            <div className="row h-100">

                <div className="col-lg-8 bg-light position-relative">
                    <div className="bg-image" style={{ backgroundImage: 'url("./image/corporate.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}></div>

                    <div className="login-card card position-absolute rounded-4 shadow-lg">
                        <div className="card-body text-center">

                            <h5 className="card-title mb-4">Login</h5>

                            <div className="card rounded bg-white w-100 mb-3 custom-button" onClick={()=>{handleClick("Manager")}}>
                                <img src="./svg/person.svg" alt="Facebook" className="button-icon" />
                                Login as Manager
                            </div>

                            <div className="card rounded bg-white w-100 mb-3 custom-button" onClick={()=>{handleClick("Director")}}>
                                <img src="./svg/person.svg" alt="Facebook" className="button-icon" />
                                Login as Director
                            </div>

                            <div className="card rounded bg-white w-100 mb-3 custom-button" onClick={()=>{handleClick("Employee")}}>
                                <img src="./svg/person.svg" alt="Facebook" className="button-icon" />
                                Login as Employee
                            </div>

                            <div className="card rounded bg-white w-100 mb-3 custom-button" onClick={()=>{handleClick("VP")}}>
                                <img src="./svg/person.svg" alt="Facebook" className="button-icon" />
                                Login as VP
                            </div>
                        </div>
                    </div>

                </div>

                {/* Remaining Space (30%) - Empty */}
                <div className="col-lg-4 bg-white"></div>
            </div>
        </div>
    );
}

export default LoginPage;