import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Layout = props => {
  return (
    <>
      <section className="d-flex vh-100 align-items-center">
        <Container fluid>
          <Row>
            <Col
              sm={{ span: 10, offset: 1 }}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 3 }}
              xl={{ span: 4, offset: 4 }}
            >
              {props.children}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Layout
