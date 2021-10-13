import express from 'express';
const router = express.Router();
import Board from '../model/Board.js';

router.get('/board', (req, res) => {
  Board.find({}, (err, board) => {
    if (err) {
      conosle.log(err, '📝')
    };
    res.render('index', { title: 'Node.js + Express + ejs 템플릿으로 게시판 만들기 🔖', board: board });
  });
});

router.get('/write', (req, res) => {
  res.render('write', { title: '게시판에 글 써보기 📝' });
});

// post
router.post('/board/write', (req, res) => {
  const board = new Board();
  board.title = req.body.title;
  board.contents = req.body.contents;
  board.author = req.body.author;
  board.boardDate = req.body.boardDate;
  board.save((err) => {
    if (err) {
      console.log(err);
      res.redirect('/');
    }
    res.redirect('/');
  });
});

// get
router.get('/board/:id', (req, res) => {
  Board.findById(req.params.id, (err, board) => {
    if (err) {
      console.log(err);
      res.redirect('/');
    }
    res.render('board', { title: '내가 쓴 글 🖍', board: board });
  });
});

// put
router.put('/update/:_id', (req, res, next) => {
  return Board.findById(req.params._id)
    .then(board => board.set({...req.body}).save())
    .then(board => res.json({ board }))
    .catch(next);
});

// Delete
router.delete('/delete/:id', (req, res) => {
  Board.deleteOne({_id:req.params.id}, (err, board) => {
    if (err) {
      console.log(err);
      res.redirect('/');
    }
    res.redirect('/');
  });
});

export default router;