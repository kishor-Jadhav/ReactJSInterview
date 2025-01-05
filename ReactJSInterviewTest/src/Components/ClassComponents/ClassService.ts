import axios from "axios"; 
import { from, of } from "rxjs";
export const fetchUserDetailService = (userId: number) => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return from(axios.get(url)); // Return an observable
  };
 