import { useEffect, useState } from 'react';
import AnimationImage from '../../components/common/animationImage';
import './style.css';
import TypingAnimation from '../../components/animationtyping';
import { useTranslation } from 'react-i18next';

function Self() {
  const { i18n } = useTranslation();

  const keyVi = {
    fullName: 'Họ và tên:',
    birth: 'Ngày sinh:',
    age: 'Tuổi:',
    gender: 'Giới tính:',
    relationship: 'Mối quan hệ:',
    aboutMe: 'Những gì về tôi:',
    homeTown: 'Quê quán:',
  };

  const keyEn = {
    fullName: 'Full name:',
    birth: 'Date of birth:',
    age: 'Age:',
    gender: 'Gender:',
    relationship: 'Relationship:',
    aboutMe: 'AboutMe:',
    homeTown: 'Home town:',
  };

  const vi = {
    fullName: 'Nguyen Xuan Chien',
    birth: '01/11/2000',
    age: '23 tuổi',
    gender: 'Nam',
    relationship: 'Độc thân',
    aboutMe: 'Lập trình viên',
    homeTown: 'Chi Linh - Hai Duong - Viet Nam',
  };
  const en = {
    fullName: 'Nguyen Xuan Chien',
    birth: '01/11/2000',
    age: '23 tuổi',
    gender: 'Nam',
    relationship: 'Single',
    aboutMe: 'Programmer',
    homeTown: 'Chi Linh - Hai Duong - Viet Nam',
  };
  const [informationPersonal, setInformationPersonal] = useState<any>(vi);
  const [keyInformationPersonal, setKeyInformationPersonal] =
    useState<any>(keyVi);

  useEffect(() => {
    if (i18n.language === 'vi') {
      setInformationPersonal(vi);
      setKeyInformationPersonal(keyVi);
      return;
    }
    setInformationPersonal(en);
    setKeyInformationPersonal(keyEn);
  }, [i18n.language]);
  return (
    <div className="flex mt-6">
      <AnimationImage
        srcImage={
          'https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/333102530_2299712840207164_8363433714766986764_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fff4kFOfGd8AX_7bTYf&_nc_ht=scontent.fhan4-3.fna&oh=00_AfBbvy7gR62em1OF1mtEdFEJZklIC2uBEplHEg0eAlhiWQ&oe=643CAEA1'
        }
      />
      <div className="w-2/3 ">
        <div>
          {Object.keys(informationPersonal).map((key: any, value: any) => {
            return (
              <div className="border-b-[1px] border-dotted border-slate-950 dark:border-white w-full mt-[30px] flex">
                <div className="mx-4 font-medium w-40">
                  {keyInformationPersonal[key]}
                </div>
                <div>{informationPersonal[key]}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Self;
