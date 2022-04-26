import { useAppSelector } from '../../Hooks/useRedux';
import { NotificationBar } from './Navigation/NotificationBar';
import { Sidebar } from './Sidebar/Sidebar';
import './template.scss';

export const Template = ({ Component }: any) => {
  const { sidebarOpen, darkTheme } = useAppSelector((state) => state.ui);
  return (
    <div className={`template-body template-${sidebarOpen ? 'open' : 'close'}`}>
      <div className='template-sidebar'>
        <Sidebar darkTheme={darkTheme} sidebarOpen={sidebarOpen} />
      </div>
      <div className='sidebar-block'>
        <Sidebar darkTheme={darkTheme} sidebarOpen={sidebarOpen} />
      </div>
      <div className='body'>
        <div className='content'>{Component}</div>
        <div className='notification-tempalte'>
          <NotificationBar />
        </div>
      </div>
    </div>
  );
};
