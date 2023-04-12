import { Button, Tooltip } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { languageGlogbal } from '../../../store/select';

function ButtonCustoms() {
  const [darkToggle, setDarkToggle] = useState<boolean>(true);
  const count = useSelector((state: any) => state.constant.language);

  useEffect(() => {
    if (darkToggle) {
      localStorage.setItem('dark', 'true');
    } else {
      localStorage.removeItem('dark');
    }
    console.log('count', count);
  }, [darkToggle]);
  return (
    <div>
      <Tooltip label="Tooltip for disabled button" offset={-74}>
        <Button
          variant="default"
          onClick={() => {
            setDarkToggle(!darkToggle);
          }}
        >
          {count}
        </Button>
      </Tooltip>
    </div>
  );
}

export default ButtonCustoms;
