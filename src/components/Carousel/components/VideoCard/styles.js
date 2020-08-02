import styled from 'styled-components';

const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  &:hover,
  &:focus {
    &:after,
    span {
      opacity: 1;
    }
  }

  &:not(:first-child) {
    margin-left: 20px;
  }

  &:after,
  span {
    font-size: 1.4rem;
    position: absolute;
    opacity: 0;
    transition: .3s;
  }
  
  span {
    margin: 0;
    left: 10px;
    bottom: 10px;
    z-index: 10;
    font-weight: 700;
  }

  &:after {
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.5);
    z-index: 1;
  }
`;

export default VideoCardContainer;
