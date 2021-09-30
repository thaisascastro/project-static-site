import { Breadcrumb, Layout, Menu, PageHeader } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React, { Fragment } from "react";

export const HeaderFarm = () => {
  return (
    <Fragment>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {new Array(5).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{` ${key}`}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Quem Somos</Breadcrumb.Item>
            <Breadcrumb.Item>Nossos Produtos</Breadcrumb.Item>
            <Breadcrumb.Item>Localização</Breadcrumb.Item>
            <Breadcrumb.Item>Fale Conosco</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Escola Etec Antônio de Pádua Cardoso
        </Footer>
      </Layout>
    </Fragment>
  );
};
