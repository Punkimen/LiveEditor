import type { FC } from 'react';

interface IChatBodyProps {
  messages: Array<string>;
}

export const ChatBody: FC<IChatBodyProps> = (props) => {
  return (
    <div>
      {props.messages.map((el) => {
        return <div>{el}</div>;
      })}
    </div>
  );
};
