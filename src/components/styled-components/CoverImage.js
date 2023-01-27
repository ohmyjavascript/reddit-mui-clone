import styled from '@emotion/styled';

export const CoverImage = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.3),
      rgba(0, 0, 0, 0.7)
    ),
    url(${(props) => props.imageUrl});
  width: 100%;
  height: ${(props) => props.imageHeight};
  background-size: cover;
  color: white;
  padding: 20px;
`;
