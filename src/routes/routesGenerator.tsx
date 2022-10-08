import { Homepage } from '../pages';

export const routesGenerator = (props?: unknown) => {
  return [
    {
      path: '/*',
      element: <Homepage />
    }
  ];
};
