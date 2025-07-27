import type { ButtonHTMLAttributes, FC } from 'react';
import s from './Btn.module.css';

interface IBtn extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Btn: FC<IBtn> = ({ children, ...props }) => {
  return (
    <button className={s.btn} {...props}>
      {children}
    </button>
  );
};
