import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '@app/Dashboard/Dashboard';
import { Support } from '@app/Support/Support';
import { Sources } from '@app/Sources/Sources';
import { NewportNews } from '@app/Corridors/NewportNews';
import { Norfolk } from '@app/Corridors/Norfolk';
import { Richmond } from '@app/Corridors/Richmond';
import { Roanoke } from '@app/Corridors/Roanoke';
import { NotFound } from '@app/NotFound/NotFound';

const BASE_PATH = process.env.BASE_PATH || '/';

export interface IAppRoute {
  label?: string; // Excluding the label will exclude the route from the nav sidebar in AppLayout
  /* eslint-disable @typescript-eslint/no-explicit-any */
  element: React.ReactElement;
  /* eslint-enable @typescript-eslint/no-explicit-any */
  exact?: boolean;
  path: string;
  title: string;
  routes?: undefined;
}

export interface IAppRouteGroup {
  label: string;
  routes: IAppRoute[];
}

export type AppRouteConfig = IAppRoute | IAppRouteGroup;

const routes: AppRouteConfig[] = [
  {
    element: <Dashboard/>,
    exact: true,
    label: 'Overall',
    path: BASE_PATH,
    title: 'Amtrak Virginia Ridership | Overall',
  },
  {
    label: 'Corridors',
    routes: [
      {
        element: <NewportNews/>,
        exact: true,
        label: 'Newport News',
        path: BASE_PATH + 'corridors/newport-news',
        title: 'Amtrak Virginia Ridership | Newport News'
      },
      {
        element: <Norfolk/>,
        exact: true,
        label: 'Norfolk',
        path: BASE_PATH + 'corridors/norfolk',
        title: 'Amtrak Virginia Ridership | Norfolk'
      },
      {
        element: <Richmond/>,
        exact: true,
        label: 'Richmond',
        path: BASE_PATH + 'corridors/richmond',
        title: 'Amtrak Virginia Ridership | Richmond'
      },
      {
        element: <Roanoke/>,
        exact: true,
        label: 'Roanoke',
        path: BASE_PATH + 'corridors/roanoke',
        title: 'Amtrak Virginia Ridership | Roanoke'
      }
    ],
  },
  {
    element: <Sources/>,
    exact: true,
    label: 'Sources',
    path: BASE_PATH + 'sources',
    title: 'Amtrak Virginia Ridership | Sources',
  },
  {
    element: <Support/>,
    exact: true,
    label: 'Support',
    path: BASE_PATH + 'support',
    title: 'Amtrak Virginia Ridership | Support Page',
  },
];

const flattenedRoutes: IAppRoute[] = routes.reduce(
  (flattened, route) => [...flattened, ...(route.routes ? route.routes : [route])],
  [] as IAppRoute[]
);

const AppRoutes = (): React.ReactElement => (
  <Routes>
    {flattenedRoutes.map(({ path, element }, idx) => (
      <Route path={path} element={element} key={idx} />
    ))}
    <Route element={<NotFound />} />
  </Routes>
);

export { AppRoutes, routes };
