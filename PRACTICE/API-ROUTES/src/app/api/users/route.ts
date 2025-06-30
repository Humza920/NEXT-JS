import { NextRequest , NextResponse } from "next/server";
let id = 21
   type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    gender: string;
    country: string;
    createdAt: string;
  };
 const users: User[] = [
    {
      id: 1,
      name: "Ali Raza",
      email: "ali@example.com",
      age: 25,
      gender: "Male",
      country: "Pakistan",
      createdAt: "2024-01-10",
    },
    {
      id: 2,
      name: "Sara Khan",
      email: "sara@example.com",
      age: 22,
      gender: "Female",
      country: "Pakistan",
      createdAt: "2024-02-15",
    },
    {
      id: 3,
      name: "Usman Tariq",
      email: "usman@example.com",
      age: 28,
      gender: "Male",
      country: "Pakistan",
      createdAt: "2023-11-22",
    },
    {
      id: 4,
      name: "Zainab Ali",
      email: "zainab@example.com",
      age: 24,
      gender: "Female",
      country: "Pakistan",
      createdAt: "2024-03-01",
    },
    {
      id: 5,
      name: "Hassan Mehmood",
      email: "hassan@example.com",
      age: 30,
      gender: "Male",
      country: "Pakistan",
      createdAt: "2023-12-10",
    },
    {
      id: 6,
      name: "Fatima Noor",
      email: "fatima@example.com",
      age: 26,
      gender: "Female",
      country: "Pakistan",
      createdAt: "2024-04-02",
    },
    {
      id: 7,
      name: "Hamza Yousuf",
      email: "hamza@example.com",
      age: 27,
      gender: "Male",
      country: "Pakistan",
      createdAt: "2023-10-05",
    },
    {
      id: 8,
      name: "Maha Shah",
      email: "maha@example.com",
      age: 23,
      gender: "Female",
      country: "Pakistan",
      createdAt: "2024-01-25",
    },
    {
      id: 9,
      name: "Bilal Ahmad",
      email: "bilal@example.com",
      age: 29,
      gender: "Male",
      country: "Pakistan",
      createdAt: "2023-08-14",
    },
    {
      id: 10,
      name: "Laiba Sheikh",
      email: "laiba@example.com",
      age: 21,
      gender: "Female",
      country: "Pakistan",
      createdAt: "2024-06-01",
    },
    {
      id: 11,
      name: "Areeb Jamil",
      email: "areeb@example.com",
      age: 32,
      gender: "Male",
      country: "Pakistan",
      createdAt: "2023-09-09",
    },
    {
      id: 12,
      name: "Nimra Saleem",
      email: "nimra@example.com",
      age: 24,
      gender: "Female",
      country: "Pakistan",
      createdAt: "2024-05-11",
    },
    {
      id: 13,
      name: "Danish Ali",
      email: "danish@example.com",
      age: 27,
      gender: "Male",
      country: "Pakistan",
      createdAt: "2023-12-30",
    },
    {
      id: 14,
      name: "Mehwish Khan",
      email: "mehwish@example.com",
      age: 28,
      gender: "Female",
      country: "Pakistan",
      createdAt: "2024-03-17",
    },
    {
      id: 15,
      name: "Faisal Iqbal",
      email: "faisal@example.com",
      age: 33,
      gender: "Male",
      country: "Pakistan",
      createdAt: "2023-07-22",
    },
    {
      id: 16,
      name: "Iqra Nasir",
      email: "iqra@example.com",
      age: 22,
      gender: "Female",
      country: "Pakistan",
      createdAt: "2024-04-18",
    },
    {
      id: 17,
      name: "Taha Rizwan",
      email: "taha@example.com",
      age: 25,
      gender: "Male",
      country: "Pakistan",
      createdAt: "2024-01-07",
    },
    {
      id: 18,
      name: "Noor Fatima",
      email: "noor@example.com",
      age: 26,
      gender: "Female",
      country: "Pakistan",
      createdAt: "2023-11-15",
    },
    {
      id: 19,
      name: "Ahmad Shah",
      email: "ahmad@example.com",
      age: 31,
      gender: "Male",
      country: "Pakistan",
      createdAt: "2023-06-11",
    },
    {
      id: 20,
      name: "Ayesha Malik",
      email: "ayesha@example.com",
      age: 20,
      gender: "Female",
      country: "Pakistan",
      createdAt: "2024-02-21",
    },
  ];

export const GET = async () => {
  return Response.json(users);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  users.push(body)
return NextResponse.json({
    message: "Data received successfully!",
    receivedData: body,}
);
}

export const DELETE = async (request: NextRequest) => {
  const obj = await request.json()
  const id = obj.id;
  console.log("id", id);
  users.splice(id , 1)
  return NextResponse.json({
    message: "Data deleted successfully!",
    id : id,
    });
}