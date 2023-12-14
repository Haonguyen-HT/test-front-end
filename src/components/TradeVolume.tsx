import { useIntl } from 'react-intl';

type TradeVolumeProps = {
  data: { value: string; title: string }[];
};

export const TradeVolume = ({ data }: TradeVolumeProps) => {
  const intl = useIntl();
  return (
    <div className='w-[100%] grid grid-cols-3 bg-haftWhite py-[50px] rounded-[20px] border-white border-[1px]'>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className='w-[100%] flex justify-between items-center flex-col'
          >
            <div className='text-deepNavy text-[49px]'>{item.value}</div>
            <div className='text-duskyTeal text-[16px]'>
              {intl.formatMessage({ id: item.title })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
