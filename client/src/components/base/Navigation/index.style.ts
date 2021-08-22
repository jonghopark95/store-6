import styled from 'styled-components';
import { BadgeSVG } from '~/assets';

export const NavigationWrapper = styled.nav`
  width: 100%;
  height: 100px;
`;

export const Content = styled.div`
  height: 100%;
  position: relative;
  height: 100px;
  margin: 0 auto;
  width: 920px;
`;

const uselessDoodleHeight = '16px';
export const UselessDoodle = styled.div`
  position: absolute;
  top: calc(50% - ${uselessDoodleHeight} / 2);
  left: 0;
  height: ${uselessDoodleHeight};
`;

const logoHeight = '71px';
const logoWidth = '203px';
const logoOffset = '10px';
export const Logo = styled.div`
  position: absolute;
  top: calc(50% - ${logoHeight} / 2);
  left: calc(50% - ${logoWidth} / 2 - ${logoOffset});
  width: ${logoWidth};
  height: ${logoHeight};
`;

const headerRightSectionHeight = '34px';
export const HeaderRightSection = styled.div`
  position: absolute;
  top: calc(50% - ${headerRightSectionHeight} / 2);
  height: fit-content;
  right: 0;
  display: flex;
  gap: 35px;
`;

export const CartWrapper = styled.div`
  position: relative;
`;

export const BadgeWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: -8px;
  text-align: center;
  line-height: 20px;
  height: 20px;
  width: 20px;
  background: url(${BadgeSVG}) no-repeat center center;
  color: #fff;
  font-size: 12px;
`;
