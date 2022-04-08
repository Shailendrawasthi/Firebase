import {FC, useState, useEffect } from "react";

import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const App:FC=()=> {
  
  const [newName, setNewName] = useState<string>("");
  const [newAge, setNewAge] = useState<number>(0);

  const [users, setUsers] = useState<any>([]);
  const usersCollectionRef = collection(db, "users");

  const createUser =()=> {
    addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
   
  };

  const updateUser = async (id:any, age:any) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser =  (id:any) => {
    const userDoc = doc(db, "users", id);
     deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      
       setUsers(data.docs.map((doc:any) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [users]);

  return (
    <div>
      <input
        placeholder="Name..."
        onChange={(event:any) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(event:any) => {
          setNewAge(event.target.value);
        }}
      />

      <button onClick={createUser}> Create User</button>
      {users.map((user:any) => {
        return (
          <div>
            {" "}
            <h1>Name:{user.name}</h1>
            <h1>Age:{user.age}</h1>
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              {" "}
              Increase Age
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {" "}
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;