
import React, { useEffect } from "react";
import { Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/Users/actions";
import CardComponent from "./components/Card";
const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector(
    (state: any) => state.users?.data
  );

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <div className="site-card-border-less-wrapper">
      <Row gutter={24}>
        {userData
          ? userData.map((item: any) => {
            return <CardComponent key={item.id} item={item} />;
          })
          : null}
      </Row>

    </div>
  );
};

export default Home;
