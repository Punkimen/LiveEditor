const URL = 'http://localhost:3000';

export const createRoom = async () => {
  try {
    const data = await fetch(`${URL}/room/create`, { method: 'POST' });
    return await data.json();
  } catch (e) {
    console.log('error', e);
  }
};

export const getAllRoom = async () => {
  try {
    const data = await fetch(`${URL}/room`);
    return await data.json();
  } catch (e) {
    console.log('eror', e);
  }
};

export const getRoom = async (id: number) => {
  try {
    const data = await fetch(`${URL}/room/${id}`);
    return await data.json();
  } catch (e) {
    console.log('eror', e);
  }
};

interface IRoom {
  id: string;
  content: string;
}

export const updateRoom = async (body: IRoom) => {
  try {
    return await fetch(`${URL}/room`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  } catch (e) {
    console.log('eror', e);
  }
};
