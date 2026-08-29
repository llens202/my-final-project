import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Container = styled.div`
  border: 1px solid ${({ $themeMode }) =>
    $themeMode === 'night' ? '#334155' : '#e2e8f0'};

  padding: 12px;
  margin-bottom: 10px;
`;

const Title = styled(Link)`
  margin-right: 10px;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;

  color: ${({ $themeMode }) =>
    $themeMode === 'night' ? '#ffffff' : '#1e293b'};

  opacity: 0.9;
  transition: opacity 0.15s;

  &:hover {
    opacity: 1;
  }
`;

const Author = styled.em``;

const Description = styled.p``;

const Card = ({ title, description, author, postID }) => {
  const { theme } = useTheme();

  return (
    <Container $themeMode={theme}>
      <Title
        $themeMode={theme}
        to={`/post/${postID}`}
      >
        {title}
      </Title>

      <Author>author #{author}</Author>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;