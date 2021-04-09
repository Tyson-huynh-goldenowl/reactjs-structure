import React from "react";
import { Card, Avatar, Image, Col } from 'antd';

interface CardProps {
  id: String;
  embed_url: String;
  title: String;
  images: any;
}

const CardComponent = ({ item }: any) => {
  if (!item) return null;
  return (
    <Col span={8}> <Card title={item?.name || 'Title'} bordered={false} style={{ width: 300, margin: 10 }}>
      <Avatar
        src={<Image src={item?.avatar} />}
        size={80}
      />
      <p>{item?.status}</p>

    </Card></Col>

  );
};

export default CardComponent;
