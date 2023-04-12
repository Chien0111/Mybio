import { forwardRef, useState } from 'react';
import { Group, Avatar, Text, Select } from '@mantine/core';

const data = [
  {
    image:
      'https://investone-law.com/wp-content/uploads/2019/06/quoc-ky-viet-nam.jpg',
    label: 'VN',
    value: 'vi',
  },

  {
    image:
      'https://vuongquocanh.com/wp-content/uploads/2018/04/la-co-vuong-quoc-anh.jpg',
    label: 'EN',
    value: 'en',
  },
];

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  label: string;
  description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text size="sm">{label}</Text>
        </div>
      </Group>
    </div>
  )
);

function MenuI18n() {
  const [defaultLanguage, setDefaultLanguage] = useState<string>('vi');
  const handleLanguage = (value: string) => {
    setDefaultLanguage(value);
  };
  return (
    <div>
      <Select
        classNames={{
          wrapper: 'w-[74px]',
          dropdown: 'w-[74px]',
          input: 'w-[74px]',
        }}
        itemComponent={SelectItem}
        data={data}
        value={defaultLanguage}
        onChange={handleLanguage}
      />
    </div>
  );
}

export default MenuI18n;
