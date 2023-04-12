import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import LayoutDefault from '../layout/default/index';

const Home = lazy(() => import('../pages/Home/index'));
const NotFound = lazy(() => import('../pages/NotFound/index'));

function RouterContainer() {
  const dataRouter = [
    {
      path: '/home',
      element: Home,
      layout: LayoutDefault,
    },
    {
      path: '*',
      element: NotFound,
      layout: LayoutDefault,
    },
  ];
  return (
    <Routes>
      {dataRouter.map((item: any) => {
        return (
          <Route
            path={item.path}
            element={
              <item.layout>
                <item.element />
              </item.layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default RouterContainer;
