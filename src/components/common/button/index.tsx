import { Button, Tooltip } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { drakModeGlogbal } from '../../../store/select';
import { handleDrakMode } from '../../../store/slice/constant';
import { Sun1, Moon } from 'iconsax-react';

function ButtonCustoms() {
  const drakMode = useSelector(drakModeGlogbal);
  const dispatch = useDispatch();

  return (
    <div>
      <Tooltip
        label={`${drakMode ? 'Drak' : 'Bright'} `}
        offset={-78}
        classNames={{
          tooltip: 'bg-transparent text-black',
        }}
      >
        <div
          className="w-[50px] text-center hover:cursor-pointer p-2"
          onClick={() => {
            dispatch(handleDrakMode());
          }}
        >
          {drakMode ? (
            <Moon size="32" color="rgb(253 224 71)" variant="Bold" />
          ) : (
            <Sun1 size="32" color="rgb(253 224 71)" variant="Bold" />
          )}
        </div>
      </Tooltip>
    </div>
  );
}

export default ButtonCustoms;
