import { Breadcrumb, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React, { Fragment } from "react";

export const VehicleParking = () => {
  return (
    <Fragment>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {new Array(4).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{` ${key}`}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Vagas</Breadcrumb.Item>
            <Breadcrumb.Item>Entre Contato</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Vagas Disponíveis</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Escola Etec Antônio de Pádua Cardoso
        </Footer>
      </Layout>
    </Fragment>
  );
}