import React from "react";
import { Story, Meta } from "@storybook/react";
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from "../../components";
import { AvatarProps } from "./Avatar";

export default {
  title: "Example/Avartar",
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;


export const Large = Template.bind({});
Large.args = {
  size: 40,
  icon: <UserOutlined />
};

export const Small = Template.bind({});
Small.args = {
  size: 80,
  icon: <AntDesignOutlined />
};
