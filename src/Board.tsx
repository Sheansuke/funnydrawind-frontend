import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import DrawingBoard from "react-drawing-board";

interface Props {
  user: string;
}

const Board: React.FC<Props> = ({ user }) => {
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
    <DrawingBoard
      userId="Sheansuke" // identify for different players.
      operations={operations}
      onChange={boardOperations}
      style={{
        width: 1000,
        height: 500,
        border: "1px solid red",
      }}
    />
  );
};
export default Board;
