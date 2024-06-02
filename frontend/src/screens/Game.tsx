import { Button } from "../components/Button"
import { ChessBoard } from "../components/ChessBoard"

export const Game = () => {
    return <div className="flex justify-center">
        <div className="pt-8 max-w-screen-lg w-full">
            <div className="grid grid-cols-6 gap-4 text-white">
                <div className="col-span-4 bg-red-200 w-full">
                    <ChessBoard/>
                </div>
                <div className="col-span-2 bg-green-200 w-full">
                    <Button onClick={() => {
                        // navigate("/game") start from here tomorrow
                    }}>
                        Play
                    </Button>
                </div>
            </div>
        </div>
    </div>
}