import React, { useEffect, useState } from 'react'
import { GetCurrentUser } from '../apicalls/users';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getLoggedInUserName } from '../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { SetCurrentUser } from '../redux/usersSlice';
import { SetLoading } from '../redux/loadersSlice';

function ProtectedPage({ children }) {
    const { currentUser } = useSelector((state) => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getCurrentUser = async () => {
        try {
            dispatch(SetLoading(true));
            const response = await GetCurrentUser();
            dispatch(SetLoading(false));
            if (response.success) {
                message.success(response.message);
                dispatch(SetCurrentUser(response.data));
            } else {
                throw new Error(response.message);
            }
        } catch (error) {
            dispatch(SetLoading(false));
            message.error(error.message);
        }
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getCurrentUser();
        } else {
            navigate("/login");
        }
    }, []);

    return (
        currentUser && (
            <div>
                {/*header*/}
                <div className="flex justify-between items-center text-black px-5 py-5 mx-5 mt-14 rounded-b-md">
                    
                    <div style={{ marginLeft: "1200px" }} className='flex items-center align-right gap-1 pt-3'>
                        <i class="ri-shield-user-line"></i>
                        <div className='flex flex-col'>
                            <span className='mr-5 text-md cursor-pointer'
                            onClick={() => navigate("/profile")}
                            >
                                {getLoggedInUserName(currentUser).toUpperCase()}
                            </span>
                        </div>

                        <i
                            className="ri-logout-circle-r-line ml-5 cursor-pointer"
                            onClick={() => {
                                localStorage.removeItem("token");
                                navigate("/login");
                            }}
                        ></i>
                    </div>
                </div>

                {/*body*/}
                <div className='px-5 '>{children}</div>
            </div>
        )
    );
}

export default ProtectedPage;