import styled from 'styled-components';

export const Btn = styled.button`
  background-color: plum;
  border: none;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  color: white;
  font-weight: 700;
  font-size: 15px;
  padding: 10px;
  margin-left: 15px;
  cursor: pointer;

  &:active {
    background-color: deeppink;
  }
`;
export const ContactsEl = styled.li`
  background-color: #f0ecec;

  padding: 0px 15px 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* flex-direction: column; */
  width: 340px;
  height: 60px;
  font-weight: 500;
  font-size: 18px;
`;
