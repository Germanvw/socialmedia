import { NotificationBar } from './Navigation/NotificationBar';
import { Sidebar } from './Sidebar/Sidebar';
import './template.scss';

export const TemplateBody = ({ Component }: any) => {
  return (
    <div className='template-body'>
      <Sidebar />
      <div className='body'>{Component}</div>
      <NotificationBar />
    </div>
  );
};
