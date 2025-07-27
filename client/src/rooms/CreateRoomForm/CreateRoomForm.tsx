import { useEffect } from 'react';
import { Btn } from '../../shared/ui/Buttons/Btn';
import { Input } from '../../shared/ui/Inputs/Input';
import s from './CreateRoomForm.module.css';

export const CreateRoomForm = () => {

  useEffect(()=>)

  return (
    <div className={s.root}>
      <form>
        <Input
          name="name"
          value=""
          onChange={(e) => {
            console.log({ e });
          }}
        />
        <Btn>Создать</Btn>
      </form>
    </div>
  );
};
