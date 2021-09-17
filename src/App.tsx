/* eslint-disable no-nested-ternary */
/* eslint-disable no-debugger */
import React, { useState, useEffect } from 'react';
import Layout from './components/layout';
import NoSearch from './components/no-search';
import Notification from './components/notification';
import Profile from './components/profile';
import Repositories from './components/repositories';
import useGithub from './hooks';

const App: React.FC = () => {
  const { githubState } = useGithub();

  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    debugger;
    if (githubState.statusCode && githubState.statusCode === 404) {
      setShowNotification(true);
    } else setShowNotification(false);
  }, [githubState]);

  useEffect(() => {}, [showNotification]);

  return (
    <Layout>
      {showNotification && (
        <Notification type="danger" text="Usuário não encontrado!" />
      )}
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : !showNotification ? (
        <NoSearch />
      ) : (
        ''
      )}
    </Layout>
  );
};

export default App;
