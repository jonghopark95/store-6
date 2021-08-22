import styled from 'styled-components';
import {
  FilledHeartSVG,
  ProductInfoDividerSVG,
  UnfilledHeartSVG,
} from '~/assets';

export const ProductDetailContainerWrapper = styled.div`
  width: 300px;
  height: fit-content;
`;

export const ProductName = styled.div`
  width: 270px;
  margin-bottom: 32px;
  font-size: 35px;
  line-height: 44px;
`;

export const PriceParagraph = styled.p`
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;
`;

export const DiscountedPrice = styled.span`
  margin-right: 15px;
  font-size: 20px;
  text-decoration-line: line-through;
  color: #999999;
`;

export const OriginPrice = styled.span`
  font-size: 30px;
  color: #000000;
`;

export const MainSectionDivider = styled.img.attrs({
  src: ProductInfoDividerSVG,
  alt: 'main divider',
})`
  all: unset;
`;

export const UserInteractArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 25px;
`;

interface LikeButtonProps {
  isLike: boolean;
}
// https://github.com/styled-components/styled-components/issues/1959
export const LikeButton = styled.img.attrs<LikeButtonProps>(({ isLike }) => ({
  src: isLike ? FilledHeartSVG : UnfilledHeartSVG,
  alt: 'like button',
}))<LikeButtonProps>`
  margin-left: 30.5px;
`;