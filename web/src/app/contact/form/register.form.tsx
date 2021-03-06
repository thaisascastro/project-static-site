import {
  Col,
  Row,
  Form,
  Input,
  Select,
  Button,
  DatePicker,
  InputNumber,
  notification,
} from "antd";

import React, { Fragment, useCallback } from "react";

export const RegisterContact = () => {
  const { Option } = Select;

  const { Item, useForm } = Form;

  const [form] = useForm();

  const onFinish = useCallback(async (data) => {
    try {
      await fetch("http://localhost:4000/ticket", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      form.resetFields();

      notification.success({
        message: "Compra realizada com sucesso!",
        description: "Seu ingresso foi comprado com sucesso!",
      });
    } catch (error) {
      notification.error({
        message: "Não foi possível realizar a compra!",
        description: "Ocorreu um erro ao efetuar a compra!",
      });
    }
  }, []);

  return (
    <Fragment>
      <div className="register">
        <div className="registerContainer">
          <div className="registerCard">
            <div className="imageHeader">
              <img
                alt="logo"
                src="/assets/r-i-r.jpeg"
                width={200}
                height={50}
              />
            </div>
            <Form layout="vertical" onFinish={onFinish} form={form}>
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
              <Row>
                <Col span={24}>
                  <Item
                    hasFeedback
                    name="email"
                    label="Email"
                    rules={[
                      {
                        type: "email",
                        required: true,
                        message: "Obrigatório!",
                      },
                    ]}
                  >
                    <Input placeholder="Digite seu e-mail" />
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Item
                    hasFeedback
                    name="age"
                    label="Idade"
                    rules={[{ required: true, message: "Obrigatório!" }]}
                  >
                    <InputNumber
                      min={1}
                      max={100}
                      style={{ width: "100%" }}
                      placeholder="Digite sua idade"
                    />
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Item
                    hasFeedback
                    label="Forma de Pagamento"
                    name={"payMethod"}
                    rules={[{ required: true, message: "Obrigatório!" }]}
                  >
                    <Select placeholder="Selecione a forma de pagamento">
                      <Option key="1" value="CREDIT_CART">
                        Cartão Crédito
                      </Option>
                      <Option key="2" value="DEBIT_CART">
                        Cartão Débito
                      </Option>
                      <Option key="3" value="PIX">
                        PIX
                      </Option>
                    </Select>
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Item
                    hasFeedback
                    name="showDate"
                    label="Data do show"
                    rules={[{ required: true, message: "Obrigatório!" }]}
                  >
                    <DatePicker style={{ width: "100%" }} />
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
