import { Col, Row } from 'antd';
import React from 'react';
import {AppConfig} from '../../App.config';
import {City} from '../City/City';

export const Cities:React.FC = () => {

    return <Row>
        {AppConfig.cities.map( city => <Col span={6}><City name={city} max={20} min={-5} /></Col>)}
    </Row>
}