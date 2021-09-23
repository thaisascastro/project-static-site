import { Fragment } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";

export const Eecommerce = () => {
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
            <Breadcrumb.Item>Escola</Breadcrumb.Item>
            <Breadcrumb.Item>Aluno</Breadcrumb.Item>
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
