import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    width: 100vw;
    padding: 15px 30px;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    flex-wrap: wrap;
    background-color: ${({ scrolled }) => (scrolled ? 'rgba(0, 0, 33, 0.9)' : 'transparent')};
    z-index: 1;
`