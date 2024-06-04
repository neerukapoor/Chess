import { Color, PieceSymbol, Square } from "chess.js"
import { useState } from "react";

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over"

export const ChessBoard = ({board, socket}: {
    board: ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][];
    socket: WebSocket;
}) => {

    const [from, setFrom] = useState<null | Square>(null);
    const [to, setTo] = useState<null | Square>(null);
    

    return <div className="text-white-200 w-full">
        {board.map((row,i) => {
            return <div key={i} className="flex">
                {row.map((square, j) => {
                    return <div onClick={() => {
                        if(!from) {
                            setFrom(square?.square ?? null); // ?. this means return square if square.square is defined else return undefined... ?? (Nullish Coalescing) means : This operator returns the right-hand operand when the left-hand operand is null or undefined.
                        } else {
                            setTo(square?.square ?? null);
                            socket.send(JSON.stringify({
                                type: MOVE,
                                payload: { 
                                    from: from,
                                    to:to
                                }
                            }))
                        }
                    }} key={j} className={`w-16 h-16 ${(i+j)%2 === 0 ? 'bg-green-500' : 'bg-green-300'}`}>
                        <div className="w-full justify-center flex h-full">
                            <div className="h-full flex justify-center flex-col">
                                {square ? square.type : ""}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        })}
    </div>
}