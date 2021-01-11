// Write your Character component here
import React from 'react';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.css";
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Character = (props) => {
    const { name, birth, gender, height, weight } = props;

    const CardStyle = styled.div`
     color: #000000;
     background-color: #A9A9A9;
     cursor: default;
     margin: 1vh;
     transition: 0.3s;
     &:hover {
         box-shadow: 0px 0px 10px
     }
    `;

    return (
        <CardStyle>
           <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
               <CardBody>
                <CardTitle tag='h3'>{name}</CardTitle>
                <CardSubtitle tag='h5' className='mb-2 text-muted'>
                    Date of Birth: {birth}, Sex: {gender}, Height: {height}cm, Weight: {weight}kg
                </CardSubtitle>
                </CardBody>
            </Card>
        </CardStyle>
        
    );
};

export default Character;