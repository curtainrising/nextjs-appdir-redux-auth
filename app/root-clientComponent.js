'use client';

import { Provider } from 'react-redux';
import { makeStore } from '@/redux/store';

import { Header } from '@/ui/exportedComponents';

export default function ClientComponent({children, ...rest}) {
  const store = makeStore(rest.authData || {});
  return (
    <>
      <Provider store={store}>
        <main>
          <div className='header-main'>
            <Header />
          </div>
          <div className='body-main'>
            {children}
          </div>
          <div className="footer-main">
              footer
          </div>
        </main>
      </Provider>
    </>
  );
}