import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from './components/errorBoundary';
import Tabs from './components/tabs';
import ToggleTheme from './components/toggleTheme';
import GlobalStyles from './GlobalStyles';
import routes from './routes';

const App: React.FunctionComponent = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const themeToggler = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  return (
    <ErrorBoundary>
      <ThemeProvider theme={{ theme }}>
        <Router>
          <GlobalStyles theme={theme} />
          <main className="main">
            <div className="flex space-between align-center">
              <Tabs theme={theme} />
              <ToggleTheme themeToggler={themeToggler} theme={theme} />
            </div>
            <section className="section">
              <Switch>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    render={() => <route.component />}
                  />
                ))}
              </Switch>
            </section>
          </main>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
