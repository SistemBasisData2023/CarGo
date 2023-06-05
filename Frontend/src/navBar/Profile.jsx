import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/authorize');
        if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        setAuthorized(data.authorized);
        } else {
        console.error('Error:', response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);
}

export default Profile;