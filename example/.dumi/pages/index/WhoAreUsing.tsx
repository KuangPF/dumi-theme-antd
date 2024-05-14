import { type FC } from 'react';

const userList = [
  {
    name: 'Ant Design',
    logoUrl: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
  }
];
const WhoAreUsing: FC = () => {
  return (
    <ul className="dumi-site-who-are-using">
      {userList.map((item, index) => (
        <li>
          <a href="https://ant.design" target="_blank" rel="noreferrer" key={index}>
            <img src={item.logoUrl} alt="Ant Design" />
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default WhoAreUsing;
