import styled from 'styled-components';

const Navbar = (props) => {
    return (
        <Ship>
            <a style={{color: "white"}}>Free shipping, 30-day return or refund guarantee.</a>
        <Tabs>
            <a ><span>SIGNIN</span></a>
            <a><span>FAQS</span></a>
            <a><span>USD</span></a>
        </Tabs>
        </Ship>
    );
};

const Ship = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    z-index: 3;
`;


const Tabs = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    a {
        display: flex;
        align-items: center;
        padding: 0 20px;
        span {
            color: white;
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
        }
    }
    @media (max-width: 768px) {
        display: none;
    }
`;


export default Navbar;