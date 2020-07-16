import React from 'react';
import './App.css';
import { Typography, Form, Input, Button, Checkbox } from 'antd';
const { Title } = Typography

function App() {

  function onFinish(){

  }

  function onFinishFailed(){
    
  }

  return (
    <div className="App">
      <Typography>
        <Title>Harry Porter</Title>
      </Typography>
      <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Full Name"
        name="fullname"
        rules={[
          {
            required: true,
            message: 'Please input your fullname!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="ID number"
        name="id_number"
        rules={[
          {
            required: true,
            message: 'Please input your id number!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="School Name"
        name="school_name"
        rules={[
          {
            required: true,
            message: 'Please input your School name!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

       <Form.Item
        label="Class"
        name="class"
        rules={[
          {
            required: true,
            message: 'Please input your class!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Class Number"
        name="class_number"
        rules={[
          {
            required: true,
            message: 'Please input your class number!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
}


export default App;
