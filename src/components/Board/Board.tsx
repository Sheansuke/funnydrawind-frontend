import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import DrawingBoard from "react-drawing-board";

interface Props {
  user: string;
}

export const Board: React.FC<Props> = ({ user }) => {
  const [operations, setOperations] = useState<any>([]);

  const history = useHistory();
  useEffect(() => {
    if (!user) history.push("/");
  }, [history, user]);

  const boardOperations = (newOperation: any, afterOperation: any) => {
    const boardUser = newOperation?.userId;
    console.log("🚀 ~ file: Board.tsx ~ line 7 ~ operations", operations);
    console.log("change");

    setOperations(afterOperation);
  };

  return (
    <>
      <DrawingBoard
        userId="Sheansuke" // identify for different players.
        operations={operations}
        onChange={boardOperations}
        style={{
          width: "100%",
          height: "100%",

          backgroundColor: "rgba( 30, 41, 59, 0.25 )",
        }}
      />
    </>
  );
};
