import './widgetSm.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';
import { Link, useNavigate } from 'react-router-dom';

export default function WidgetSm() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getUsers = async () => {
      try {
         const res = await userRequest.get("user/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        {users.map((user) => (
          <li className='widgetSmListItem' key={user._id}>
            <img
              src={
                user.img ||
                'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
              }
              alt=''
              className='widgetSmImg'
            />
            <div className='widgetSmUser'>
              <span className='widgetSmUsername'>{user.username}</span>
            </div>
            <button
              className='widgetSmButton '
              onClick={() => navigate(`/user/${user._id}`)}
            >
              <VisibilityIcon className='widgetSmIcon' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
