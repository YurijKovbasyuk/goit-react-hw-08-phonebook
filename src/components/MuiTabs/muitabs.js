import { useRouteMatch } from '../Router/router';
import { Tab, Tabs } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export function MyTabs() {
  let user = useSelector(state => state.user);
  const routeMatch = useRouteMatch(['/contacts', '/login', '/register']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      {user.name && (
        <Tab
          label="Contacts"
          value="/contacts"
          to="/contacts"
          component={Link}
        />
      )}
      {!user.name && (
        <Tab
          label="Registration"
          value="/register"
          to="/register"
          component={Link}
        />
      )}
      {!user.name && (
        <Tab label="Login" value="/login" to="/login" component={Link} />
      )}
    </Tabs>
  );
}
