import React, { ReactElement } from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { history } from '../Router/AppRouter';
import { store } from '../Redux/index';

const render = (ui: ReactElement, renderOptions?: RenderOptions) => {
  const Wrapper: React.FC = ({ children }: any) => {
    return (
      <Provider store={store}>
        <HistoryRouter history={history}>{children}</HistoryRouter>
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
