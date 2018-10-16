import styled from 'styled-components';

export const Wrapper = styled.section`
    padding: 0;
    margin: 0;
    height: 100vh;
    text-align: center;
    
    background: linear-gradient(123deg, #1de1ae, #f355d2, #f39c55, #c855f3, #cc8f49);
    background-size: 1000% 1000%;
    
    animation: backgroundGradient 300s ease infinite;

    @keyframes backgroundGradient { 
        0%{background-position:0% 44%}
        50%{background-position:100% 57%}
        100%{background-position:0% 44%}
    }
    

`;

export const Heading = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #f5f5f5;
`;

export const InputStyle = styled.input`
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(228, 228, 228, 0.66);
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
`;


