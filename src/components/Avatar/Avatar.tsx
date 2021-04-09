import React from "react";
import { Avatar } from 'antd';

export interface AvatarProps {
  size?: number;
  icon?: any;
}

const AvatarComponent = ({ size, icon, ...props }: any) => {
  return <Avatar
    icon={icon}
    size={size || 40}
  />
};

export default AvatarComponent;
