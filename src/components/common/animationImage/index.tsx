import { Image } from '@mantine/core';
import './style.css';
function AnimationImage(prop: any) {
  return (
    <div >
      <div className="animationImage">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Image
          className="shadow"
          maw={240}
          mx="auto"
          radius="md"
          src={prop.srcImage}
          alt="Random image"
        />
      </div>
    </div>
  );
}

export default AnimationImage;
