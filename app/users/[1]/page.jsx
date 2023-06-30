async function getUser(id ) {
  
 const res = await  fetch(`https://reqres.in/api/users/${id}`)
 const data = await res.json();
  return data
  
}
export default async function Users({ params }) {

 const info = await getUser(params.id)
 console.log(info)
  return (
    <div>
      <h1>users</h1>
      <p>
        {JSON.stringify(info)}
      </p>
    </div>
  );
}
