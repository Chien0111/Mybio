import SideBar from '../../components/share/sideBar';
import Header from './header';

function LayoutDefault({ children }: any) {
  return (
    <div className="flex bg-white dark:bg-gray-900 text-gray-900 rounded-lg dark:text-white">
      <div className="w-80">
        <SideBar />
      </div>
      <div className="w-full p-2">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default LayoutDefault;
