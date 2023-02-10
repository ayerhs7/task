import styled from 'styled-components';

const Header = (props) => {
    return (<Nav>
        <Logo><img src = "/images/logo.png" alt = "Male Fashion"/></Logo>
                    <NavMenu>
                        <a ><span>Home</span></a>
                        <a><span>Shop</span></a>
                        <a><span>Pages</span></a>
                        <a><span>Blog</span></a>
                        <a><span>Contacts</span></a>
                        <a><img src = "/images/search.png" style={{marginLeft: "550px"}} /> </a>
                        <a><img src = "/images/heart.jpg" /> </a>
                        <a><img src = "/images/shopping.png" /> </a>
                        <a><span>$0.00</span></a>
                    </NavMenu>
        </Nav>
    );
};

const Nav = styled.nav`
    position: fixed;
    margin-top: 3%;
    left:0;
    right: 0;
    height: 70px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img {
        display: block;
        width: 100%;
    }
`;


const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }
        span {
            color: black;
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;

            &:before {
                background-color: red;
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: alll 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }

        &:hover{
            span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

export default Header;