import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  data:[ {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },],
}
export const adduserdata = (user)=>{
  return (dispatch)=>{
   fetch('https://jsonplaceholder.typicode.com/users',{
    method:'POST',
    body:JSON.stringify(user)
   }).then(res=>res.json()).then(response=>{
    dispatch(addusers(user))
   }).catch(error=>{
    console.log('error',error)
   })


  }
  }

export const deleteuserdata = (id)=>{
  return (dispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/users/'+id,{
      method:'DELETE',
      
    }).then(res=>res.json()).then(response=>{
      dispatch(deleteusers(id))
    }).catch(error=>{
      console.log('error',error)
    })
  }
}

export const edituserdata = (user)=>{
  return (dispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/users/'+user.id,{
      method:'PUT',
      body:JSON.stringify(user)
    }).then(res=>res.json()).then(response=>{
      dispatch(editusers(user))
    }).catch(error=>{
      console.log('error',error)
    })
  }
}

export const userSlice = createSlice({
  name:'datafetch',
  initialState,
  reducers:{
    addusers:(state,action)=>{
      let newuser = {id:state.data.length+1,...action.payload}
      state.data.push(newuser)
    },
    deleteusers:(state,action)=>{
      let index = state.data.findIndex((user)=>user.id===action.payload)
      state.data.splice(index,1)
    },
    editusers:(state,action)=>{
      let index = state.data.findIndex((user)=>user.id===action.payload.id)
      state.data[index] = action.payload
    }
  }
})

export const {addusers , deleteusers , editusers} = userSlice.actions
export default userSlice.reducer