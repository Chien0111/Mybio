import { Menu, Button, Image } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import EN from '../../../assets/images/flag/flag_en.png';
import VN from '../../../assets/images/flag/flag_vn.png';
import { useState } from 'react';

function MenuI18n() {
  const [languageDefault, setLanguageDefault] = useState(true);
  const { t, i18n } = useTranslation();
  const handleEnglish = () => {
    setLanguageDefault(false);
    i18n.changeLanguage('en');
  };
  const handleVietNam = () => {
    setLanguageDefault(true);
    i18n.changeLanguage('vi');
  };
  return (
    <div className="mx-2">
      <Menu>
        <Menu.Target>
          {languageDefault ? (
            <div className="flex justify-center w-[110px] border-[1px] p-2 rounded-xl">
              <Image width={40} height={30} src={VN} />
              <div className="ml-4">VN</div>
            </div>
          ) : (
            <div className="flex justify-center w-[110px] border-[1px] p-2 rounded-xl">
              <Image width={40} height={30} src={EN} />{' '}
              <div className="ml-4">EN</div>
            </div>
          )}
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            icon={<Image width={40} height={30} src={VN} />}
            onClick={handleVietNam}
          >
            VN
          </Menu.Item>
          <Menu.Item
            icon={<Image width={40} height={30} src={EN} />}
            onClick={handleEnglish}
          >
            EN
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default MenuI18n;
