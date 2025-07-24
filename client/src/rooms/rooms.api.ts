const URL = 'http://localhost:3000';

export const createRoom = async ()=>{
  try{
    const date = fetch(`${URL}/room/create`,{method: 'POST'})
    return await data.json()
  }catch(e){
    console.log('error',e)
  }
}


export const getAllRoom = async ()=>{
  try{
    const data =  await fetch(`${URL}/room`);
    return await data.json()
  }catch(e){
    console.log('eror',e);
  }
}
