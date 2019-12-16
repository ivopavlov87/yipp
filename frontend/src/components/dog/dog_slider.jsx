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
        
        if (this.props.imgUrls.length === 0) {
            return <div className="no-image-display">
                <img src="https://we-camp-seeds.s3.us-east-2.amazonaws.com/no-image.png" alt="no-img-display"/>
            </div>
        } else {
            let photos = this.props.imgUrls.map((url, idx) =>
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
}

export default DogSlider;