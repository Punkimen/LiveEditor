import { useEffect, type ChangeEvent } from "react";
import { io } from "socket.io-client";

const URL = "http://localhost:3000/";
const socket = io(URL);

export const SocketComponent = () => {
  useEffect(() => {
    socket.connect();

    socket.on("listenText", (data) => {
      console.log("Получено от сервера:", data);
    });

    return () => {
      socket.off("listenText");
    };
  }, []);

  socket.on("listenTExt", (data) => {
    console.log("listen", data);
  });
  console.log("event", socket.hasListeners("listenText"));

  return (
    <>
      <input
        onInput={(e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          console.log("value", value);
          socket.emit("listenText", value);
        }}
      />
    </>
  );
};
