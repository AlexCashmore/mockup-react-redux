import React from 'react';
import { Card, Col, Icon, Row } from 'react-materialize';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div>
      <Row>
        <Col l={4} m={6} s={8} className="offset-s2 offset-l2">
          <Link to="/medication" >
            <Card className="hoverable center-align z-depth-3" style={{ color: '#0e7f8f' }}>
              <h5>
                Option 1
              </h5>
            </Card>
          </Link>
        </Col>
        <Col l={4} m={6} s={8} className="offset-s2">
          <Link to="/medications" >
            <Card className="hoverable center-align z-depth-3" style={{ color: '#0e7f8f' }}>
              <h5>
                Option 2
              </h5>
            </Card>
          </Link>
        </Col>
        <Col l={4} m={6} s={8} className="offset-s2 offset-l2">
          <Link to="/prescriptions/" >
            <Card className="hoverable center-align z-depth-3" style={{ color: '#0e7f8f' }}>
              <h5>
                Option 3
              </h5>
            </Card>
          </Link>
        </Col>
        <Col l={4} m={6} s={8} className="offset-s2">
          <Link to="/orders/pending" >
            <Card className="hoverable center-align z-depth-3" style={{ color: '#0e7f8f' }}>
              <h5>
                Option 4
              </h5>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>);
export default HomePage;
