import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { getAntdInputValidation } from '../../utils/helpers';

function HospitalOrgani({ type }) {
    return (
        <>
            <Form.Item
                label={type === "hospital" ? "Hospital Name" : "Organization Name"}
                name={type === "hospital" ? "hospitalName" : "organizationName"}
                rules={getAntdInputValidation()}
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
            <Form.Item name="website"
                label="Website"
                rules={getAntdInputValidation()}
            >
                <Input />
            </Form.Item>

            <Form.Item name="address"
                label="Address" className="col-span-2"
                rules={getAntdInputValidation()}
            >
                <TextArea />
            </Form.Item>
        </>
    )
}

export default HospitalOrgani