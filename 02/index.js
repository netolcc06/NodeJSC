/*
0 - obter usuario
1 - obter o numero de telefone de um usuaio a partir de seu id
2 - obter endereco de usuario pelo seu id
*/

const util = require('util');
const getAddressAsync = util.promisify(getAddress);

function getUser(){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function (){
            return resolve({
                id: '1',
                name: 'Aladdin',
                birthDate: new Date()
            })
        }, 1000)
    })
}

function getPhone(userId){
    return new Promise(function resolvePromise(resolve, reject){
      setTimeout(()=>{
          return resolve({
              number: '19111222333',
              ddd: '11'
          })
      }, 2000)
    })

}

function getAddress(userId, callback){
      setTimeout(()=>{
          return callback(null,{
              street: 'Somewhere',
              number: '123'
          })
      }, 2000)
}

main()
async function main(){
    try{
        const user = await getUser();
        //const phone = await getPhone(user.id);
        //const address = await getAddressAsync(user.id);

        const result = await Promise.all([
            getPhone(user.id),
            getAddressAsync(user.id)
        ])

        const phone = result[0];
        const address = result[1];

        console.log(`
          Name: ${user.name}
          Address: ${address.street}, ${address.number}
          Phone: (${phone.ddd}) ${phone.number}
        `);
    }
    catch(error){
        console.error("Error", error);
    }
}

// const userPromise = getUser();
// //const phone = getPhone(userPromise)
//
// userPromise
//     .then(function(user){
//         return getPhone(user.id)
//           .then(function resolvePhone(result){ // resut comes from getPhone
//               return {
//                   user:{
//                     name: user.name,
//                     id: user.id
//                   },
//                   phone: result
//               }
//           })
//     })
//     .then(function(resultado){
//         const add = getAddressAsync(resultado.user.id);
//         return add.then(function resolveAddress(result){
//             return{
//                 user: resultado.user,
//                 phone: resultado.phone,
//                 address: result
//             }
//         })
//         //return result;
//     })
//     .then(function(result){
//         console.log(`
//           Name: ${result.user.name}
//           Address: ${result.address.street}, ${result.address.number}
//           Phone: (${result.phone.ddd}) ${result.phone.number}
//           `);
//     })
//     .catch(function(error){
//         console.error("Error at creating user", error);
//     })


// function resolveUser(error, user){
//     console.log(user);
// }

// const user = getUser(function resolveUser(error, user){
//     if(error){
//         console.error("Error at user creation", error);
//         return;
//     }
//
//     getPhone(user.id, function resolvePhone(phoneError, phone){
//         if(phoneError){
//             console.error("Error at getting phone", error);
//         }
//
//         getAddress(user.id, function resolveAddress(errorAddress, address){
//             if(errorAddress){
//                 console.error("Error at getting address", error);
//             }
//
//             console.log(`
//               Name: ${user.name},
//               Address: ${address.street}, ${address.number},
//               Phone: ${phone.ddd}${phone.number}
//               `)
//         })
//     })
// });
