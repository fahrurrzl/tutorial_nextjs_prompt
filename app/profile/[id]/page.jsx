"use client";

import Profile from "@components/Profile";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const { id } = useParams();

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const response = await fetch(`/api/users/${id}`);
    const user = await response.json();

    setUser(user);
  };

  const fetchPosts = async () => {
    const response = await fetch(`/api/users/${id}/posts`);
    const data = await response.json();

    setPosts(data);
  };

  useEffect(() => {
    if (id) {
      fetchUser();
      fetchPosts();
    }
  }, []);

  return (
    <Profile
      name={user.username}
      desc="Welcome to your personalize profile page"
      data={posts}
    />
  );
};
export default UserProfile;
