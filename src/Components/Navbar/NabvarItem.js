import styled from "styled-components";

export const NavMobile = styled.div`
  svg {
    color: white;
  }
`;

export const Menu = styled.div`
  display: flex;
  background: white;
  position: fixed;
  left: ${({ open }) => (open ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: 2 all ease;
  top: 0;
  z-index: 9;

  p {
    color: black;
    font-size: 16px;
    padding: 1rem 0;
  }

  .p-menu {
    margin-bottom: 9rem;
  }
`;

export const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    color: white;
    margin-left: 1rem;
  }
`;

export const MobileIcon2 = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    color: black;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;
