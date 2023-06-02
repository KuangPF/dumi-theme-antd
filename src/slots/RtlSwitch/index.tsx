import { useContext, type FC } from 'react';
import { css } from '@emotion/react';
import type { SiteContextProps } from '../SiteContext';
import SiteContext from '../SiteContext';
import SwitchBtn from '../Header/SwitchBtn';
import LTRIcon from '../../icons/LTRIcon';
import RTLIcon from '../../icons/RTLIcon';

const useStyle = () => {
  return {
    dataDirectionIcon: css`
      width: 16px;
    `
  };
};

const RtlSwitch: FC = () => {
  const { direction, updateSiteConfig } = useContext<SiteContextProps>(SiteContext);
  const { dataDirectionIcon } = useStyle();

  const onDirectionChange = () => {
    updateSiteConfig({ direction: direction !== 'rtl' ? 'rtl' : 'ltr' });
  };

  return (
    <SwitchBtn
      onClick={onDirectionChange}
      value={direction === 'rtl' ? 2 : 1}
      label1={<LTRIcon css={dataDirectionIcon} />}
      tooltip1="LTR"
      label2={<RTLIcon css={dataDirectionIcon} />}
      tooltip2="RTL"
      pure
    />
  );
};

export default RtlSwitch;
