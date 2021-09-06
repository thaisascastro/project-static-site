import { Button, Col, Form, Input, Row } from "antd";

import React, { Fragment } from "react";

export const SearchName = () => {
  const { Item } = Form;

  return (
    <Fragment>
      <div className="search">
        <div className="registerSearch">
          <div className="cardSearch">
            <div className="searchSpan">
              <span>Venha conferir sua reserva</span>
            </div>
            <Form>
              <Row>
                <Col span={24}>
                  <Item
                    name="name"
                    hasFeedback
                    label="Nome"
                    rules={[{ required: true, message: "Obrigatório!" }]}
                  >
                    <Input placeholder="Digite seu nome" />
                  </Item>
                </Col>
              </Row>
              <Button
                shape="round"
                type="primary"
                block
                size="large"
                danger
                htmlType="submit"
              >
                Prosseguir
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
