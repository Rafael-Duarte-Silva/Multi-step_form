import * as S from './styles';

import { IconThankYou } from "./IconThankYou"

export const ThankYou = () => {
    return (
        <S.thankYouContainer>
            <IconThankYou/>
            <S.thankYouTitle>Thank you!</S.thankYouTitle>
            <S.thankYouText>
                Thanks for confirming your subscription! We hope you have fun 
                using our platform. If you ever need support, please feel free 
                to email us at support@loremgaming.com.
            </S.thankYouText>
        </S.thankYouContainer>
    );
}