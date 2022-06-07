import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h3>Goals</h3>
      <ul>
        <li>
          <Link to="/">Go to Dashboard</Link>
        </li>
        <li>
          <Link to="/auth">Authentication</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
