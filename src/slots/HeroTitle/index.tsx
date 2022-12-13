import DumiHeroTitle from 'dumi/theme-default/slots/HeroTitle';
import React from 'react';

/**
 * example for add sup to the default hero title
 */
const HeroTitle: typeof DumiHeroTitle = () => {

  return (
    <>
      <pre style={{whiteSpace: 'pre-wrap'}}>
        ===================================
        dumi-theme-antd packages status: WIP
        ===================================
    </pre>
    </>
  );
};

export default HeroTitle;
