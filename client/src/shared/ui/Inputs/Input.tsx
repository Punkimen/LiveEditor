import type { FC, InputHTMLAttributes } from 'react';
import s from './Input.module.css';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<IInput> = (props) => {
  return <input className={s.root} {...props} />;
};
