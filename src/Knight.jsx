import React from 'react';
// 1. type
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';


//3. spec & collect
//3.1 drag source(knight) specification: return empty obj for now
// in case of many pieces on chess :{pieceId: props.Id}
const knightSource = {
    beginDrag(props) {
        return {};
    }
};

//3.2 collecting function
// specifying the drag source node
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

function Knight({ connectDragSource, isDragging }) {
    return connectDragSource(
        <div style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            fontWeight: 'bold',
            cursor: 'move'
        }}>
            ♘
        </div>
    );
}
// parameter: type, spec, collect
export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);