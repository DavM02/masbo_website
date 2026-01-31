import {
  ref,
  get,
  query,
  orderByChild,
  equalTo,
  limitToLast
} from "firebase/database";
import { database } from "./firebaseConfig";

export async function loadDataByCategory(path, category) {
  if (!path) {
    throw new Error("Path is required");
  }

  try {
    const dbRef = ref(database, path);

 
    const snapshot =
      !category || category === 'all'
        ? await get(dbRef)
        : await get(
          query(
            dbRef,
            orderByChild('category'),
            equalTo(category)
          )
        );

    if (!snapshot.exists()) {
      return [];
    }

 
    return Object.values(snapshot.val());

  } catch (error) {
    console.error("Error loading data:", error);
    throw error;  
  }
}


export default loadDataByCategory;



export async function getItem([ id, dbName ]) {
  
  if (!id) {
    throw new Error("Id is required");
  }
 
  try {
    const dbRef = ref(database, dbName);
    const q = query(dbRef, orderByChild("id"), equalTo(id));
  
    const snapshot = await get(q);

    if (snapshot.exists()) {
      const data = snapshot.val();
 
      return Object.values(data)[0];
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    throw new Error("An unexpected error occurred");
  }
}

export async function getLatestNews(path="blog", limit = 3) {
  if (!path) {
    throw new Error("Path is required");
  }

  try {
    const snapshot = await get(
      query(
        ref(database, path),
        orderByChild("id"),
        limitToLast(limit)
      )
    );

    if (!snapshot.exists()) return [];

    return Object.values(snapshot.val()).reverse();

  } catch (error) {
    console.error("Error loading latest news:", error);
    throw error;
  }
}