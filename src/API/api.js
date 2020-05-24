import axios from 'axios';

const instance = axios.create({
 baseUrl:"https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
                        headers: {
                          "API-KEY": "0bcd9c1c-e120-47b0-a844-e460ded94441",
                        },
})

 export let getUsers=(currentPage,pageSize)=>{
 return instance.get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then(res=>res.data)
}

export let postFollow=(id)=>{
 return   instance
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                      {},
                     
                    )
                    .then(res=>res.data)
}
export let deleteFollow=(id)=>{
 return  instance
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                     
                    ).then(res=>res.data)
}
export let getProfile=(userId)=>{
 return  instance.
  get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
  .then(res=>res.data)
}
export let getAuthMe=()=>{
 return  instance
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      }).then(res=>res.data)
}


