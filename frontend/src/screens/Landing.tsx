export const Landing = () => {
    return <div className="flex justify-center">
        <div className="pt-8 max-w-screen-lg">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex justify-center">
                    <img src="./ChessBoard.jpg" className="max-w-96"/>
                </div>
                <div className="pt-16">
                    <div className="flex justify-center">
                        <h1 className="text-4xl font-bold text-white">
                            Play Chess Online
                        </h1>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-4 px-8 rounded">
                            Play Online
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}