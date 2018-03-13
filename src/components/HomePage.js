import React from 'react';
import {Button, Card, Col, Icon, Row} from 'react-materialize';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div>
      <Row>
        <Col l={4} m={6} s={8} className="offset-s2 offset-l2">
          <Link to="/ListExample" >
            <Card className="hoverable center-align z-depth-3" style={{ color: '#0e7f8f' }}>
              <h5>
                List Example
              </h5>
            </Card>
          </Link>
        </Col>
        <Col l={4} m={6} s={8} className="offset-s2">
          <Link to="/option2" >
            <Card className="hoverable center-align z-depth-3" style={{ color: '#0e7f8f' }}>
              <h5>
                Form Example
              </h5>
            </Card>
          </Link>
        </Col>
        <Col l={4} m={6} s={8} className="offset-s2 offset-l2">
          <Link to="/option3" >
            <Card className="hoverable center-align z-depth-3" style={{ color: '#0e7f8f' }}>
              <h5>
                Authentication Example
              </h5>
            </Card>
          </Link>
        </Col>
        <Col l={4} m={6} s={8} className="offset-s2">
          <Link to="/option4" >
            <Card className="hoverable center-align z-depth-3" style={{ color: '#0e7f8f' }}>
              <h5>
                Example 4
              </h5>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>);
export default HomePage;
