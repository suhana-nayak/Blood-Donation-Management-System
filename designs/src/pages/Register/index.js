import { Button, Form, Input, Radio, message } from 'antd';
import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import HospitalOrgani from './OrgHospitalForm';
import { RegisterUser } from '../../apicalls/users';
import { useDispatch } from 'react-redux';
import { SetLoading } from '../../redux/loadersSlice';

function Register() {
    const [type, setType] = React.useState('donor');
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const onFinish = async (values) => {
        try {
            dispatch(SetLoading(true));
            const response = await RegisterUser({
                ...values,
                userType: type,
            });
            dispatch(SetLoading(false));
            if (response.success) {
                message.success(response.message);
                navigate("/login");
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
            navigate("/")
        }
    },)
    return (
        <div style={{ marginTop: "50px" }}>
            <div className='flex h-screen items-center justify-center '>
                <Form layout='vertical'
                    className='bg-white rounded shadow grid grid-cols-2 p-5 gap-5 w-1/2'
                    onFinish={onFinish}>

                    <h1 className='col-span-2 uppercase text-2xl text-center'>
                        <span className='text-secondary'>
                            {type.toUpperCase()} - REGISTRATION</span><hr />
                    </h1>

                    <Radio.Group onChange={(e) => setType(e.target.value)}
                        value={type}
                        className='col-span-2'>
                        <Radio value='organization'>Organization</Radio>
                        <Radio value='hospital'>Hospital</Radio>
                        <Radio value='donor'>Donor</Radio>
                    </Radio.Group>


                    {type === "donor" && (
                        <>
                            {""}
                            <Form.Item
                                label='Name'
                                name='name'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your name!',
                                    },
                                    {
                                        pattern: /^[A-Za-z\s]+$/, // Regular expression to allow letters and spaces
                                        message: 'Only Alphabets and space is allowed.',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                label="Phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your phone number!',
                                    },
                                    {
                                        pattern: /^(?:\+\d{1,2}\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                                        message: 'Please enter a valid phone number',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your email address!',
                                    },
                                    {
                                        pattern: /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,})+$/,
                                        type: 'email',
                                        message: 'Please enter a valid email address.',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your password!',
                                    },
                                    {
                                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        message: 'Your password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.',
                                    },
                                ]}
                            >
                                <Input type="password" />
                            </Form.Item>
                        </>
                    )}

                    {type !== "donor" && <HospitalOrgani type={type} />}

                    <Button type='primary' block className='col-span-2 text-xl' htmlType='submit'>Register Now</Button>

                    <Link to='/login' className='col-span-2 text-center text-gray-500 underline text-xl'>
                        Already have an account? Login
                    </Link>



                </Form>
            </div >
        </div>
    )
}

export default Register