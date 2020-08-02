import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from '../Slider';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const {
    titulo, cor, link_extra: linkExtra, videos,
  } = category;
  return (
    <VideoCardGroupContainer>
      {titulo && (
        <>
          <Title style={{ backgroundColor: cor || 'red' }}>
            {titulo}
          </Title>
          {linkExtra
            && (
            <ExtraLink href={linkExtra.url} target="_blank">
              {linkExtra.text}
            </ExtraLink>
            )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={cor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

Carousel.defaultProps = {
  ignoreFirstVideo: false,
};

Carousel.propTypes = {
  ignoreFirstVideo: PropTypes.bool,
  category: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Carousel;
