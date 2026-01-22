import React, { useState } from 'react';
import { Upload, Button, Card, Row, Col, message } from 'antd';
import axios from 'axios';

const { Dragger } = Upload;

function App() {
  const [fileList, setFileList] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (fileList.length === 0) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('image', fileList[0].originFileObj);

    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData);
      const tags = response.data.tags;
      // Now search with tags
      const searchResponse = await axios.get(`http://localhost:5000/api/search?tags=${tags.join(',')}`);
      setResults(searchResponse.data);
    } catch (error) {
      message.error('Upload or search failed');
    }
    setLoading(false);
  };

  const uploadProps = {
    onRemove: () => setFileList([]),
    beforeUpload: (file) => {
      setFileList([file]);
      return false;
    },
    fileList,
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Image-Based Product Search</h1>
      <Dragger {...uploadProps}>
        <p>Click or drag image to upload</p>
      </Dragger>
      <Button type="primary" onClick={handleUpload} loading={loading} style={{ marginTop: 10 }}>
        Search
      </Button>
      <Row gutter={16} style={{ marginTop: 20 }}>
        {results.map((product) => (
          <Col span={6} key={product._id}>
            <Card title={product.name} cover={<img alt={product.name} src={product.imageUrl} />}>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;