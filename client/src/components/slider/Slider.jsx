import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {

    const [imageIndex, setImageIndex] = useState(null);

    const renderImages = images.slice(1).map((image, index) => {
                                return <img src={ image } alt="" key={index} onClick={()=> setImageIndex(index+1)}/>
                            });
    
    const handleLeftArrow = () => {
        if(imageIndex - 1 < 0) {
            setImageIndex(images.length - 1)
        }else{
            setImageIndex(imageIndex - 1)
        }
    }

    const handleRightArrow = () => {
         
        if(imageIndex + 1 > images.length - 1) {
            setImageIndex(0)
        }else{
            setImageIndex(imageIndex + 1)
        }
    }

    const changeSlider = (direction) => {
        if(direction === 'left') {
            if(imageIndex === 0) {
                setImageIndex(images.length - 1)
            }else{
                setImageIndex(imageIndex - 1)
            }
        }else{
            if(imageIndex === images.length - 1) {
                setImageIndex(0)
            }else{
                setImageIndex(imageIndex + 1)
            }
        }
    }
    
    return (
        <div className="slider">
            {imageIndex !== null && (
                <div className="fullSlider">
                    <div className="arrow" onClick={()=> changeSlider('left')}>
                        <img src="/arrow.png" alt=""/>
                    </div>
                    <div className="imgContainer">
                        <img src={images[imageIndex]} alt="" />
                    </div>

                    <div className="arrow" onClick={()=> changeSlider('right')}>
                        <img src="/arrow.png" className="right" alt=""/>
                    </div>

                    <div className="close" onClick={() => setImageIndex(null)}>X</div>
                </div>)
            }
            <div className="bigImage">
                <img src={images[0]} alt="" onClick={()=> setImageIndex(0)} />
            </div>
            <div className="smallImages">
                { renderImages }
            </div>
        </div>
    )
}

export default Slider;