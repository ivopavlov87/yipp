import React from 'react';
import Slider from 'react-slick';

class DogSlider extends React.Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        }
        const photos = this.props.imgUrls.map((url, idx) =>
            <div className='image-slide' key={`dogImg-${idx}`}>
                <img src={url} alt='dog-show' />
            </div>)
        return (
            <Slider {...settings}>
                {photos}
            </Slider>
        )
    }
}

export default DogSlider;