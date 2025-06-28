import { Button } from "@/components/ui/Button/button";

export default async function Page() {
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

  let res = await fetch("http://localhost:3000/api/users");
  const data: User[] = await res.json();
  console.log(data);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Users List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition-all"
          >
            <div className="mb-3">
              <h2 className="text-xl font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            <div className="text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-medium">Age:</span> {user.age}
              </p>
              <p>
                <span className="font-medium">Gender:</span> {user.gender}
              </p>
              <p>
                <span className="font-medium">Country:</span> {user.country}
              </p>
              <p>
                <span className="font-medium">Role:</span>{" "}
                <span
                  className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                    user.role === "admin"
                      ? "bg-blue-100 text-blue-800"
                      : user.role === "moderator"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {user.role}
                </span>
              </p>
              <p>
                <span className="font-medium">Status:</span>{" "}
                <span
                  className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>
              </p>
              <p>
                <span className="font-medium">Joined:</span> {user.createdAt}
              </p>
            </div>

            <div className="flex justify-end"><Button variant="destructive">DELETE USER</Button></div>
          </div>
        ))}
      </div>
    </div>
  );
}
