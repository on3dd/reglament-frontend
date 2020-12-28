import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { PropsWithTheme } from '@reglament';

import { useSiteInfoStore } from '../../../store/site-info';

import { useThemeContext } from '../../../utils/contexts/ThemeContext';

import Container from '../container';

type FooterContainerProps = PropsWithTheme<{}>;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;

  color: ${({ theme }: FooterContainerProps) => {
    return theme.fontColorNeg;
  }};

  background-color: ${({ theme }: FooterContainerProps) => {
    return theme.primaryColor;
  }}; ;
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

const BaseFooter: React.FC = observer(() => {
  const { store } = useSiteInfoStore();
  const { theme } = useThemeContext();

  const reg_num = useMemo(() => {
    return store.info.reg_num ? store.info.reg_num : '………';
  }, [store.info.reg_num]);

  const date = useMemo(() => {
    return store.info.date
      ? new Date(store.info.date).toLocaleDateString('ru')
      : '………';
  }, [store.info.date]);

  const reg_author = useMemo(() => {
    return store.info.reg_author ? store.info.reg_author : '……';
  }, [store.info.reg_author]);

  const boss = useMemo(() => {
    return store.info.boss ? store.info.boss : '……';
  }, [store.info.boss]);

  return (
    <FooterContainer theme={theme} className="footer">
      <Container>
        <FooterContent>
          <FooterText>
            Сетевое издание «Официальный сайт правовой информации
            Артёмовского городского округа» Учредитель : Администрация
            Артёмовского городского округа Запись о регистрации СМИ: Эл №
            {' ' + reg_num} от {date}, выдано Федеральной службой по
            надзору в сфере связи, информационных технологий и массовых
            коммуникаций ({reg_author}) Главный редактор : {boss}
          </FooterText>
          <FooterAgeLimit>12+</FooterAgeLimit>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
});

export default BaseFooter;
