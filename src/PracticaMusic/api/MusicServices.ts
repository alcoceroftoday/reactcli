import React, { useState, useEffect } from "react";
// export default class UserService {

//   public getUser(user_id: string | number) : Promise<IUser>{
//     return http_java.get(`/api/users/${user_id}`)
//     .then(res => res.data);
//   } 


//   public getAddresses(user_id: string | number) : Promise<IAddressInfo[]> {
//     return http_java.get(`/api/users/${user_id}/addresses`)
//     .then(res => {
//       return res.data;
//     })
//   }

//   public addNewAddress(user_id: string|number, address: Partial<IAddressInfo>) : Promise<IAddressInfo> {
//     return http_java.post(`/api/users/${user_id}/addresses`, address)
//     .then( res => res.data);
//   }

// }