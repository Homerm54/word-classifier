import React, {Component} from 'react';
import Typist from 'react-typist';
import {Row, Col} from 'react-bootstrap';
import './style.css';

export default class Banner extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Typist avgTypingDelay={0.0005} stdTypingDelay={0}>
      <Row className="pt-5">
        <Col xs={12} md={6}>
        <div className="bannerBook">
          <pre className="bannerWordWhite pt-5 pl-5 text-success">
            {`
      @@@@@@@@@@@               @@@@@@@@@@/
    @@@*            @@    ,@@            @@@@
    @ @*                @                @/ @
    @ @*                @                @/ @
    @ @*                @                @/ @
    @ @*                @                @/ @
    @ @*                @                @/ @
    @ @*                @                @/ @
    @ @*                @                @/ @
    @ @*                @                @/ @
    @ @*                @                @/ @
    @         @@@@.     @     (@@@@         @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`}
          </pre>
        </div>
        </Col>
        <Col xs={12} md={6}>
        <div className="bannerWord">
          <pre className="bannerWordWhite overflow-hidden pt-5 text-primary">
            {`




888       888                      888
888   o   888                      888
888  d8b  888                      888
888 d888b 888  .d88b.  888d888 .d88888
888d88888b888 d88""88b 888P"  d88" 888
88888P Y88888 888  888 888    888  888
8888P   Y8888 Y88..88P 888    Y88b 888
888P     Y888  "Y88P"  888     "Y88888



 .d8888b.  888                            d8b  .d888 d8b
d88P  Y88b 888                            Y8P d88P"  Y8P
888    888 888                                888
888        888  8888b.  .d8888b  .d8888b  888 888888 888  .d88b.  888d888
888        888     "88b 88K      88K      888 888    888 d8P  Y8b 888P"
888    888 888 .d888888 "Y8888b. "Y8888b. 888 888    888 88888888 888
Y88b  d88P 888 888  888      X88      X88 888 888    888 Y8b.     888
 "Y8888P"  888 "Y888888  88888P'  88888P' 888 888    888  "Y8888  888`}
          </pre>
        </div>
        </Col>
      </Row>
      </Typist>
    );
  }
}
