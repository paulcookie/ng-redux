export default function digestMiddleware($rootScope) {
  return store => next => action => {
      return $rootScope.$eval(next(action));
  };
}
