"use client"
import { useRouter } from "next/navigation";
export default function Users({users}) {

    const routerUser = useRouter()
  return (
    <div>
         <h1>User</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}
            onClick={() =>{
                routerUser.push(`/users/${user.id}`)
            }
                
            }>
              <div>
                <h4>{user.id} {user.first_name} {user.last_name}</h4>
                <p>{user.email}</p>
                <img src={user.avatar} alt={`Avatar of ${user.id}`} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}
