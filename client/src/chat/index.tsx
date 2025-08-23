import { ChatBody } from './ui/Body/ChatBody';
import { Sender } from './ui/Sender/Sender';

export const Chat = () => {

  return (
    <div className="chat">
      <ChatBody messages={['asd']} />
      <Sender />
    </div>
  );
};
