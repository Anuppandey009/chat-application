
const users =[]
// addUser, removeUser, getUser, getUsersInRoom

const adduser = ({id, username, room})=>{
    //Sanitize the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if(!username || !room){
        return {
            error:"Username and room are required"

        }
    }

    // check for the existing User
    const existinguser = users.find((user)=>{
              return user.room == room && user.username==username
    })
    if(existinguser){
        return{
            error:'Username is in used in the room!'
        }
    }
    const user={id,username,room}
    users.push(user)
    return {user}
}


const removeUser = (id)=>{
    const index= users.findIndex((user)=>{
        return user.id==id
    })
    if(index!=-1){
        return users.splice(index,1)[0]
    }
}



const getUser=(id)=>{
  return users.find((user)=>user.id==id)
}

const getUserInRoom=(room)=>{
    console.log("room ========> ",room);
    if(room != undefined){
    room = room.trim().toLowerCase()
    return users.filter((user)=>user.room==room)
    }
}

module.exports={
    adduser,
    removeUser,
    getUser,
    getUserInRoom
}

