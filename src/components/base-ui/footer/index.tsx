import React from 'react';
import styled from 'styled-components';

import Container from '../container';

const FooterContainer = styled.footer`
  /* position: absolute;
  bottom: 0%; */
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  color: #ffffff;
  background-color: #0066b3;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterText = styled.p`
  margin: 0;
  max-width: 1010px;
  font-size: 0.85rem;
  line-height: 1.25rem;
`;

const FooterAgeLimit = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;

const BaseFooter: React.FC = () => {
  return (
    <FooterContainer className="footer">
      <Container>
        <FooterContent>
          <FooterText>
            Сетевое издание «Официальный сайт правовой информации
            Артёмовского городского округа» Учредитель : Администрация
            Артёмовского городского округа Запись о регистрации СМИ: Эл №
            ………. от ……, выдано Федеральной службой по надзору в сфере
            связи, информационных технологий и массовых коммуникаций
            (Роскомнадзор) Главный редактор : Рабинович Элина Дмитриевна
          </FooterText>
          <FooterAgeLimit>12+</FooterAgeLimit>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};

export default BaseFooter;
