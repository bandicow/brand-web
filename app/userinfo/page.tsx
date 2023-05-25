import { DefaultSession } from "next-auth";

// DefaultSession 타입

const UserCard = ({ user }: { user: DefaultSession["user"] }) => {
  return (
    <div className="userInfo">
      <div className="userInfo-body">
        <p>Current Logged In User</p>
        <h5 className="userInfo-title">{user?.name}</h5>
        <p className="userInfo-text">{user?.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
