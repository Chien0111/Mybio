import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <div>
      Nguyen Xuan Chien
      <h5>{t('content.functional')}</h5>
      <div className="bg-gray-200 dark:bg-gray-800">Phung Thi Luong</div>
    </div>
  );
}

export default Home;
