import styled from 'styled-components';

export const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LeftDoodles = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export const RightDoodles = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 33%;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex: 2;
  min-width: 400px;
  max-width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 12px;
`;

export const LoginFormHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 64px;
  font-size: 48px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  height: 55px;
  width: 183px;
`;

export const CheckboxSection = styled.section`
  width: 100%;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  margin-top: 32px;
  padding-left: 14px;
  cursor: pointer;
`;

export const SocialButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 48px;
  justify-content: space-evenly;
  align-items: center;
`;
