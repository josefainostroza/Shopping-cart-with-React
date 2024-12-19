import styled from 'styled-components';
const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;
const StyledContainerCard = styled.div`
	position: relative;
`;
const StyledImgContainer = styled.div`
	position: relative;
	background-image: ${({ $img }) => `Url(${$img})`};
	background-size: contain;
	background-repeat: no-repeat;
	width: 327px;
	height: 212px;
	border-radius: 8px;
	object-fit: cover; /* Recorte adecuado si la imagen es más grande */
`;
const StyledcontainerFilter = styled.div`
	display: flex;
	gap: 19px;
`;
const StyledDefault = styled.p`
	font-weight: 600;
	background-color: white;
	border: 1px solid #ad8a85;
	border-radius: 100px;
	padding: 8px 22px;
`;
const StyledContainerAddCart = styled.div`
	position: absolute;
	background-color: white;
	border: 1px solid #ad8a85;
	border-radius: 100px;
	padding: 12px 28px;
	display: flex;
	justify-content: center;
	align-items: center;
	left: calc(50% - 85px);
	bottom: -22px;
	gap: 19px;
`;
const ImgShopping = styled.img`
	width: 20px;
	object-fit: cover; /* Recorte adecuado si la imagen es más grande */
`;
const StyledAddtoCart = styled.p`
	font-weight: 600;
	color: #260f08;
	font-size: 14px;
`;
const StyledContainerText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	margin-top: 24px;
`;
const StyledName = styled.p`
	font-weight: 400;
	color: #87635a;
	font-size: 14px;
`;
const StyledNameInCart = styled.p`
	font-weight: 600;
	color: #260f08;
	font-size: 16px;
`;
const StyledPrice = styled.p`
	font-weight: 600;
	color: #c73b0f;
	font-size: 16px;
`;

export {
	StyledImgContainer,
	StyledcontainerFilter,
	StyledDefault,
	StyledName,
	StyledNameInCart,
	StyledPrice,
	StyledAddtoCart,
	ImgShopping,
	StyledContainerAddCart,
	StyledContainerText,
	StyledContainer,
	StyledContainerCard
};
