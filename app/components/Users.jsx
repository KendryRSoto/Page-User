"use client";
import { useRouter } from "next/navigation";
export default function Users({ users }) {
  const routerUser = useRouter();
  return (
    <div>
      <h1>User</h1>
      <ul className="list-group">
        {users.map((user) => {
          return (
            <li className="list-group-item d-flex justify-content-betwen align-items-center list-group-item-action"
              key={user.id}
              onClick={() => {
                routerUser.push(`/users/${user.id}`);
              }}
            >
              <img src={user.avatar} alt={user.Users}
              style={{borderRadius: '50%',
              marginRight: '20px'}} />
              <div className="card-body">
                <h5 className="card-title">
                  {user.first_name} {user.last_name}
                </h5>
                <p className="card-text">{user.email}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
