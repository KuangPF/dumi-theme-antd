import { useContext, type FC } from 'react';
import type { SiteContextProps } from '../SiteContext';
import SiteContext from '../SiteContext';
import SwitchBtn from '../Header/SwitchBtn';

const RtlSwitch: FC = () => {
  const { direction, updateSiteConfig } = useContext<SiteContextProps>(SiteContext);

  const onDirectionChange = () => {
    updateSiteConfig({ direction: direction !== 'rtl' ? 'rtl' : 'ltr' });
  };

  return (
    <SwitchBtn
      onClick={onDirectionChange}
      value={direction === 'rtl' ? 2 : 1}
      label1={
        <img
          src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*6k0CTJA-HxUAAAAAAAAAAAAADrJ8AQ/original"
          alt="direction"
        />
      }
      tooltip1="LTR"
      label2={
        <img
          src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*SZoaQqm2hwsAAAAAAAAAAAAADrJ8AQ/original"
          alt="LTR"
        />
      }
      tooltip2="RTL"
      pure
    />
  );
};

export default RtlSwitch;
