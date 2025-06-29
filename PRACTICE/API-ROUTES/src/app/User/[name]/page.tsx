export default async function Page({params}: {params: { name: string }}) {
  type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    gender: string;
    country: string;
    status: string;
    role: string;
    createdAt: string;
  };
  let {name} = params;
  name = decodeURIComponent(name);
  console.log(name);
  
  const data = await fetch("http://localhost:3000/api/users");
  const users = await data.json();

  const singleUser = users.find((user: User) => {
    console.log(user.name, name);
  
    return user.name === name;
  });

  console.log(singleUser);
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-md w-full space-y-4">
        <div className="flex items-center justify-center bg-blue-100 rounded-full w-24 h-24 mx-auto text-3xl font-bold text-blue-600">
          {singleUser.name.charAt(0)}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">{singleUser.name}</h2>
          <p className="text-sm text-gray-500">{singleUser.email}</p>
        </div>

        <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
          <p>
            <span className="font-medium text-gray-700">Age:</span> {singleUser.age}
          </p>
          <p>
            <span className="font-medium text-gray-700">Gender:</span>{" "}
            {singleUser.gender}
          </p>
          <p>
            <span className="font-medium text-gray-700">Country:</span>{" "}
            {singleUser.country}
          </p>
          <p>
            <span className="font-medium text-gray-700">Status:</span>{" "}
            {singleUser.status}
          </p>
          <p>
            <span className="font-medium text-gray-700">Role:</span> {singleUser.role}
          </p>
          <p>
            <span className="font-medium text-gray-700">Joined:</span>{" "}
            {new Date(singleUser.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="text-center mt-4">
          <button className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
