import React, {useState} from 'react';
import {
    Table, Tag, Space, Modal, Button, Form,
    Input,
    DatePicker,
} from 'antd';
import PlusCircleOutlined from '@ant-design/icons'
import {add} from "./adminService";
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


function Admin(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = (e) => {
        e.preventDefault();
        const data = {

            Title: title
        }
        console.log('add', data)
        add(data);

        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const [title, setTitle] = useState('');
    console.log('title', title);

    return (
        <div>
            <Button onClick={showModal}>
                Ajouter
            </Button>
            <Modal title="Ajout Cours" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    labelCol={{span: 4}}
                    wrapperCol={{span: 14}}
                    layout="horizontal"
                >
                    <Form.Item label="Titre">
                        <Input name={title} value={title} onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Lien">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Description">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Date Ajout">
                        <DatePicker/>
                    </Form.Item>
                </Form>
            </Modal>
            <Table columns={columns} dataSource={data}/>
        </div>
    );
}

export default Admin;
