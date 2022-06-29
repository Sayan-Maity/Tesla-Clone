import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <>
      <Container>
        <a>
          <img src="/logo.svg" alt="" />
        </a>
        <Menu>
          {cars &&
            cars.map((car, index) => {
              <a key={index} href="#">
                {car}
              </a>;
            })}
        </Menu>
        <RightMenu>
          <a href="#">Shop </a>
          <a href="#"> Account </a>
          <CustomMenu onClick={() => setBurgerStatus(true)} />
        </RightMenu>

        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
          {cars &&
            cars.map((car, index) => {
              <li key={index}>
                <a href="#">{car}</a>
              </li>;
            })}
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-In</a>
          </li>
          <li>
            <a href="#">Test Drive</a>
          </li>
          <li>
            <a href="#">Power Wall </a>
          </li>
          <li>
            <a href="#">Commercial Energy </a>
          </li>
          <li>
            <a href="#">Utilities </a>
          </li>
          <li>
            <a href="#">Charging </a>
          </li>
          <li>
            <a href="#">Find Us </a>
          </li>
          <li>
            <a href="#">Support </a>
          </li>
          <li>
            <a href="#">Investor Relations </a>
          </li>
          <li>
            <a href="#">Shop </a>
          </li>
          <li>
            <a href="#">Account </a>
          </li>
          <li>
            <a href="#">More </a>
          </li>
          <li>
            <a href="#">United States </a>
          </li>
        </BurgerNav>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  a {
    cursor: pointer;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  } ;
`;

const RightMenu = styled.div`
  display: flex;
  align-item: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.2s;
  overflow-y: scroll;

  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
