import { useTranslation } from 'react-i18next';
import MenuI18n from '../../components/share/language/index';
import ButtonCustoms from '../../components/common/button';

function LayoutDefault({ children }: any) {
  const { t, i18n } = useTranslation();
  const handleEnglishClick = () => {
    i18n.changeLanguage('en');
  };
  return (
    <div>
      Default
      <button onClick={handleEnglishClick}>EN</button>
      <MenuI18n />
      <ButtonCustoms />
      <div className="w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default LayoutDefault;
