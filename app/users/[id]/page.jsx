async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}
export default async function Users({ params }) {
  const info = await getUser(params.id);

  return (
    <div className="card text-center">
      <div className="card-body text-center" style={{ width: "100%" }}>
        <img
          src={info.avatar}
          alt={info.Users}
          style={{ borderRadius: "10px" }}
        />
        <div className="card-body">
          <h2 className="card-title">
            {info.first_name} {info.last_name}
          </h2>
          <p className="card-text">{info.email}</p>
        </div>
      </div>
    </div>
  );
}
