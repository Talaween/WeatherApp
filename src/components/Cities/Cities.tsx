import { Col, Row } from 'antd';
import React from 'react';
import {appConfig} from '../../App.config';
import {City} from '../City/City';

export const Cities:React.FC = () => {

    return <Row>
        {appConfig.cities.map( city => <Col span={4}><City name={city} max={20} min={-5} /></Col>)}
    </Row>
}