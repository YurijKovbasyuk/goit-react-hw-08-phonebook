import styles from 'components/app.module.css';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { useGetUserQuery } from 'redux/Auth/loginApi';
import { useGetContactsQuery } from 'redux/Contacts/rtk';
import ContactsConatiner from './ContactsContainer';
import Home from './Home';
import Login from './Login';
import { MyTabs } from './MuiTabs/muitabs';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoutes from './PublicRoutes';
import Registration from './Registration';

const App = () => {
  const { isLoading } = useGetUserQuery();
  const params = useGetContactsQuery();

  return (
    <div className={styles.app}>
      <MyTabs />
      {!isLoading && !params.isLoading ? (
        <Suspense fallback={<SyncLoader />}>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="contacts" element={<PrivateRoute />}>
                <Route
                  path="/contacts"
                  element={<ContactsConatiner data={params.data} />}
                />
              </Route>

              <Route path="/" element={<PublicRoutes restricted />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      ) : (
        <SyncLoader />
      )}
    </div>
  );
};

export default App;
