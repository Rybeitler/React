
import styled from 'styled-components'

const StyledTab = styled.div`
    border:1px solid black;
    border-radius:5px;
    width:100px;
    height:50px;
    text-align:center;
    margin:3px;
    font-size:20px;
    font-weight:bold;
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
`;

export default StyledTab;