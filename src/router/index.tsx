import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import LayoutDefault from '../layout/default/index';
import Self from '../pages/Selft';

const Home = lazy(() => import('../pages/Home/index'));
const NotFound = lazy(() => import('../pages/NotFound/index'));

function RouterContainer() {
  const dataRouter = [
    {
      path: '/',
      element: Home,
      layout: LayoutDefault,
    },
    {
      path: '/self',
      element: Self,
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
