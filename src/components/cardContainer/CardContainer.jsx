import { INFOCARDS } from '../../constants/infoCards';
import {
	StyledAddtoCart,
	StyledContainer,
	StyledContainerAddCart,
	StyledContainerCard,
	StyledcontainerFilter,
	StyledContainerText,
	StyledDefault,
	StyledImgContainer,
	StyledName,
	StyledNameInCart,
	StyledPrice
} from './cardContainer.styles';

const CardContainer = () => {
	return (
		<StyledContainer>
			<h1>Desserts</h1>
			<StyledcontainerFilter>
				<StyledDefault>Default</StyledDefault>
				<StyledDefault>Name</StyledDefault>
				<StyledDefault>Price</StyledDefault>
			</StyledcontainerFilter>
			{INFOCARDS.map(infoCard => (
				<StyledContainerCard key={infoCard.id}>
					{/* <ImgMobile src={infoCard.image.mobile} alt='' /> */}
					<StyledImgContainer $img={infoCard.image.mobile}>
						<StyledContainerAddCart>
							<img src='/public/assets/images/icon-add-to-cart.svg' alt='' />
							<StyledAddtoCart>Add to Cart</StyledAddtoCart>
						</StyledContainerAddCart>
					</StyledImgContainer>

					<StyledContainerText>
						<StyledName>{infoCard.name}</StyledName>
						<StyledNameInCart>{infoCard.nameInCart}</StyledNameInCart>
						<StyledPrice>${infoCard.price.toFixed(2)}</StyledPrice>
					</StyledContainerText>
				</StyledContainerCard>
			))}
		</StyledContainer>
	);
};
export default CardContainer;
