import { useParams } from "react-router-dom";

export default function User() {
  const { username } = useParams();
  return (
    <>
      <h1>User</h1>
      <h3>user : {username}</h3>
    </>
  );
}
