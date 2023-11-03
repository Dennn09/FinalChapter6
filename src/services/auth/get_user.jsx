import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http2 from "../../utils/http2";
// import { Toaster } from "react-hot-toast";
import { toast } from 'react-hot-toast'; // Import toast from react-hot-toast


export const ReduxGetuser = async () => {
  return await http2.get(API_ENDPOINT.GET_USER)
}


// Untuk menghit API
const fetchDataUser = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await http2.get(_key).
  then((value) => {
    // apa yang ada di dalam then adalah respon dari api yang berhasil
    // di dalam then kita bisa me manipulasi data yang ingin kita sampikan 
   
    console.log(value, "tesssss11")

    return value  

  }).catch((err) => {
    // akan di jalankan ketika terjadi eror dalam api 
    if (err.response.status === 401) {
      alert("Anda harus login dulu")
          toast.error("Anda harus login dulu");
            window.location.href = "/Login";
    }
  })
  
}

//   const [_key] = queryKey;
//   try {
//     const { data } = await http2.get(_key);
//     return data;
//   } catch (err) {
//     console.log(err, "asda");

//     alert("Anda harus login dulu")
//     toast.error("Anda harus login dulu");
//       window.location.href = "/Login";
//     // setTimeout(() => {
//     //   toast.error("Anda harus login dulu");
//     //   window.location.href = "/Login";
//     // }, 2000); 
//     throw err;
//   }
// };

const useGetDataUser = (options) => {
  return useQuery([API_ENDPOINT.GET_USER, options], fetchDataUser);
};

export { fetchDataUser, useGetDataUser };

  