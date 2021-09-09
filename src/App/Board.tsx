import React, { useState, useEffect } from "react"
import { Field } from "./Field"

function boardRow(i: number) {
    const fields = []
    for (let j: number = 0; j < 10; j++) {
        fields.push(<Field key={j.toString()} x={j} y={i}></Field>)
    }
    return fields
}

function fields() {
    const rows = []
    for (let i: number = 0; i < 10; i++) {
        rows.push(<div className="board-row">{boardRow(i)}</div>)
    }
    return rows
}

function generateBoard() {
    console.log("Board generated!")
}

export function Board() {
    const [generateBoards, setGenerateBoards] = useState(0)

    useEffect(() => {
        if (generateBoards === 1) {
            generateBoard()
        }
        // return () => {
        //     cleanup
        // }
    })

    return (
        <div onClick={() => setGenerateBoards(generateBoards + 1)} className="board">
            {fields()}
        </div>
    )
}
