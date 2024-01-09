import Carousel from "nuka-carousel";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export function Slider() {
  const customPrevButton = ({ previousSlide }) => (
    <div className="ml-4">
      <ArrowLeft className="clicked" onClick={previousSlide} size={30}/>
    </div>
  );

  const customNextButton = ({ nextSlide }) => (
    <div className="mr-4">
      <ArrowRight className="clicked" onClick={nextSlide} size={30}/>
    </div>
  );

  return (
    <Carousel
      className="w-96"
      renderCenterLeftControls={customPrevButton}
      renderCenterRightControls={customNextButton}
    >
      <img
        src="https://th.bing.com/th?id=OIF.K%2bLaalu9oJFjbeLV0wKoKA&rs=1&pid=ImgDetMain"
        style={{ width: '100%', height: '500px' }}
      />
      <img
        src="https://th.bing.com/th?id=OIF.K%2bLaalu9oJFjbeLV0wKoKA&rs=1&pid=ImgDetMain"
        style={{ width: '100%', height: '500px' }}
      />
      <img
        src="https://th.bing.com/th?id=OIF.K%2bLaalu9oJFjbeLV0wKoKA&rs=1&pid=ImgDetMain"
        style={{ width: '100%', height: '500px' }}
      />
      <img
        src="https://th.bing.com/th?id=OIF.K%2bLaalu9oJFjbeLV0wKoKA&rs=1&pid=ImgDetMain"
        style={{ width: '100%', height: '500px' }}
      />
    </Carousel>
  );
}
