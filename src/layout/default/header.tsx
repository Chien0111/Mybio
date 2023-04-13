import { useTranslation } from 'react-i18next';
import MenuI18n from '../../components/share/language/index';
import ButtonCustoms from '../../components/common/button';

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="flex items-center">
        <ButtonCustoms />
        <MenuI18n />
      </div>
    </div>
  );
}

export default Header;
