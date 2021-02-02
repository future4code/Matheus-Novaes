import axios from 'axios';
import React from 'react';
import styled from 'styled-components'

const ButtonContainer = styled.div`
    display:flex;
    justify-content: space-around;
    
`

function ChooseButton(props) {
    return (
        <ButtonContainer>
            <button onClick={props.onClickNo}>Não</button>
            <button onClick={props.onClickYes}>Sim</button>
        </ButtonContainer>
    );
}

export default ChooseButton;