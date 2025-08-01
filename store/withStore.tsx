import { persistor, store } from '@/store';
import { ComponentType, FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export const withStore = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const WithStore: FC<P> = (props) => {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <WrappedComponent {...props} />
        </PersistGate>
      </Provider>
    );
  };
  return WithStore;
};
