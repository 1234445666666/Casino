import React, { useEffect } from "react";
import { Button, Form, Input, Typography } from "antd";
import "./Header-Input.scss";
import { SearchOutlined } from "@ant-design/icons";

export default function AppInput() {


const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // console.log(event.target.value);
};


return (
  <Form className="search" onFinish={handleSubmit}>
    <Form.Item name="query">
      <Input
        onChange={handleChange}
        className="search-input"
        placeholder="Поиск..."
        suffix={
          <Button
            className="search-button"
            type="text"
            icon={<SearchOutlined className="search-icon" /> }
            htmlType="submit"
          />
        }
      />
    </Form.Item>
  </Form>
);
}


