export interface RouteInterface {
    path: string;
}

export const routes: { [key: string]: RouteInterface } = {
  login: {
    path: '/login',
  },
  signup: {
    path: '/signup',
  },
};
