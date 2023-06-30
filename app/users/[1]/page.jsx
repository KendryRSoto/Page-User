async function getUser(id) {
 const res = await  fetch(`https://reqres.in/api/users/${id}`)
 const data = await res.json();
  return data.data
}
export default async function Users({ params }) {

 const info = await getUser(params.id)

  return (
    <div>
      <h1>users</h1>
      <div>
        {JSON.stringify(info)}
      </div>
    </div>
  );
}
