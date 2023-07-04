import styled from "styled-components"

export default function MenuHamburguer () {
    return (
        <>
            <Nav>
                <input type="checkbox" id="menu-hamburguer" />
                
                <label for="menu-hamburguer">
                
                    <Div>
                        <p>Types</p>
                        <span></span>
                    </Div>
                </label>

                <Ul>
                    <li><a href="#var">var</a></li>
                    <li><a href="#var">var</a></li>
                    <li><a href="#var">var</a></li>
                    <li><a href="#var">var</a></li>
                </Ul>
            </Nav>
        </>
    )
}

const Nav = styled.nav` 

    input{
        display: none;
    }
    input:checked ~ ul{
        display: block;
    }
    input:checked ~ label span{
        transform: rotate(45deg);
    }
    input:checked ~ label span:before{
        transform: rotate(90deg);
        top: 0;
    }
    input:checked ~ label span:after{
        transform: rotate(90deg);
        bottom: 0;
    }
    label{
        display: flex;
        align-items: center;
        padding-left: 10px;
        cursor: pointer;
        color: #000;
        font-size: 18px;
        width: 195px;
        height: 40px;
    }
`

const Ul = styled.ul`
    list-style: none;
    display: none;
    position: absolute;
    a{
        text-decoration: none;
        color: #000;
    }
`

const Div = styled.div`
    display: flex;
    padding: 8px;
    width: 195px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #000;
    background-color: rgba(217, 217, 217, 0.5);

    p{
        font-size: 18px;
        line-height: 20px;
    }
    span{
        background-color: #000;
        position: relative;
        display: block;
        width: 30px;
        height: 2px;
        top: 50%;
        transform: translateY(-50%);
        left: 95px;
        transition: 0.5s ease-in-out;
    }
    span:after,
    span:before{
        background-color: #000;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 0.5s ease-in-out;
    }
    span:before{
        top: -10px;
    }
    span:after{
        bottom: -10px;
    }
`