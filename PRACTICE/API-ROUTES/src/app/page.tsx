import { Button } from "@/components/ui/Button/button";
import UserCard from "@/components/ui/Usercard/usercard";
import Link from "next/link";
export default async function Page() {
  type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    gender: string;
    country: string;
    createdAt: string;
  };

  let res = await fetch("http://localhost:3000/api/users");
  const data: User[] = await res.json();
  console.log(data);



  return (
    <>
      <div className="flex justify-center p-4">
        <Button className="cursor-pointer" variant="outline">
          <Link href="/Newuser">ADD NEW USER</Link>
        </Button>
      </div>
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Users List
        </h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {data.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
}
