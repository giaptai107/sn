import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import AuthService from "../services/auth.service";
import StatusService from "../services/status.service";
const Status = () => {
    const currentUser = AuthService.getCurrentUser();
    const [statuss, setStatus] = useState([]);
    const [currentStatus, setCurrentStatus] = useState(null);
    //   const [currentIndex, setCurrentIndex] = useState(-1);
    //   const [searchTitle, setSearchTitle] = useState("");
    console.log(currentStatus);
    useEffect(() => {
        if (!currentUser) {
            return <Redirect to="/login" />;
        }
        retrieveStatus();
    }, []);

    const retrieveStatus = () => {
        StatusService.getAll()
            .then(response => {
                setStatus(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveStatus();
        setCurrentStatus(null);
    };

    return (
        <div className="list row">
            <div className="col-md-6">
                <ul className="list-group">
                    {statuss &&
                        statuss.map((status) => (
                            <div>
                                {status.content}
                                <img src={status.image} class="img-thumbnail" alt="post image" width="304" height="236"/>
                            </div>
                        ))}
                </ul>
            </div>

        </div>
    );
};

export default Status;