function Field() {
    return (<button></button>)
    
}

function Board() {
    return (
        <div className="board">
            for (let i: number = 0; i < 10; i++) {
                <div className="board-row">
                    for (let j: number = 0; j < 10; j++) {
                        <Field />
                    }
                </div>
            }
        </div>
    )
}

export default Board;
