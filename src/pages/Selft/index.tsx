import AnimationImage from '../../components/common/animationImage';
import './style.css';

function Self() {
  return (
    <div className="flex">
      <AnimationImage
        srcImage={
          'https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/333102530_2299712840207164_8363433714766986764_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fff4kFOfGd8AX_7bTYf&_nc_ht=scontent.fhan4-3.fna&oh=00_AfBbvy7gR62em1OF1mtEdFEJZklIC2uBEplHEg0eAlhiWQ&oe=643CAEA1'
        }
      />
      <div>
        <p className="full-name">Họ và tên: Nguyen Xuan Chien</p>
        <p className="birth">Sinh ngày: 01/11/2000</p>
      </div>
    </div>
  );
}

export default Self;
