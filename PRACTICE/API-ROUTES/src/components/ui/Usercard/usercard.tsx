'use client';

import { Button } from "@/components/ui/Button/button";
import Link from "next/link";

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: string;
  country: string;
  createdAt: string;
};

export default function UserCard({ user }: { user: User }) {
  const deleteUser = async (id: number) => {
    const res = await fetch(`/api/users`, {
      method: 'DELETE',
      body: JSON.stringify({ id : id }),
    });

    if (res.ok) {
      alert("User deleted successfully");
      // optional: reload or refetch
      
    } else {
      alert("Failed to delete user");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition-all">
      <div className="mb-3">
        <Link href={`User/${user.name}`}>
          <h2 className="text-xl font-semibold text-gray-800">
            {user.name}
          </h2>
        </Link>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>

      <div className="text-sm text-gray-700 space-y-1">
        <p><span className="font-medium">Age:</span> {user.age}</p>
        <p><span className="font-medium">Gender:</span> {user.gender}</p>
        <p><span className="font-medium">Country:</span> {user.country}</p>
        <p><span className="font-medium">Joined:</span> {user.createdAt}</p>
      </div>

      <div className="flex justify-end mt-4">
        <Button
          className="cursor-pointer"
          onClick={() => deleteUser(user.id)}
          variant="destructive"
        >
          DELETE USER
        </Button>
      </div>
    </div>
  );
}
