import React from 'react';
import Slider from 'react-slick';

class DogSlider extends React.Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            // variableWidth: true
        }
        const photos = this.props.imgUrls.map(url =>
            <div className='image-slide'>
                <img src={url} alt="" />
            </div>)
        return (
            <Slider {...settings}>
                {photos}
            </Slider>
        )
    }
}

export default DogSlider;