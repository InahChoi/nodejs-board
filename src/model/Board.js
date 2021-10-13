import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const boardSchema = new Schema({
    title: { type: String},
    contents: { type: String},
    author: { type: String},
    boardDate: { type: Date, default: Date.now() },
});

boardSchema.statics.updateById = (_id, obj) => {
    return Board.findById(_id)
        .then(board => board.set({...obj}).save());
}
const Board = mongoose.model('Board', boardSchema);

export default Board;