const mongoose = require('mongoose');
const express = require('express');
let Book = require('./model/Book.js');

const app = express();
app.use(express.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect("mongodb+srv://dan_cojocaru_90233:cloudDatabase4@cluster0.klhzves.mongodb.net/?retryWrites=true&w=majority");

app.post('/api/data', (req, res) => {
    console.log(req.body)

    const title = req.body.title;
    const author = req.body.author;
    const genre = req.body.genre
    const createdAt = Date.now();
    const updatedAt = Date.now();
    
    const book = new Book({
      title,
      author,
      genre,
      createdAt,
      updatedAt
    });
    book.save()
      .then(book => res.json(book))
      .catch(err => res.status(400).json({ success: false }));
  });
  
  app.listen(3000, () => console.log('Server started on port 3000'));


/* Book.create({
    title: 'White Noise',
    author: "Don DeLillo",
    genre: 'Postmodern novel',
    createdAt: Date.now(),
    updatedAt: Date.now()
})
    .then(book => {
        console.log(book); //this part only runs when the data has entered the database
    })
    .catch(error => {
        console.error(error); //this line sends the error into the console if something went wrong
    }); */

/* async function createBook() {
    try {
        const book = await Book.create({
        title: 'Coraline',
        author: "Neil Gaiman",
        genre: 'Horror, Dark fantasy',
        createdAt: Date.now(),
        updatedAt: Date.now()
        });
        console.log(book);
    } catch (error) {
        console.error(error);
    }
}

createBook(); */

/* Book.findById("648c506e40ca73389f40b231")
    .then(book => {
        console.log("first method to find a book\n", book)
    })


async function findBook() {
    try {
        const book = await Book.findById("648c5501b6fa51de1ccd0f46");
        console.log("second method to find a book\n", book);
    } catch(error) {
        console.error(error);
    }
}

findBook(); */

/* Book.findById("648c506e40ca73389f40b231")
    .then(book => {
      book.title = 'Updated Title 1';
      return book.save();
    })
    .then(book => {
      console.log(book);
    })
    .catch(error => {
      console.error(error);
    }); */

/* async function updateBook() {
    try {
        const book = await Book.findById("648c5501b6fa51de1ccd0f46");
        book.title = 'Updated Title 2';
        const savedBook = await book.save();
        console.log(savedBook);
    } catch(error) {
        console.error(error);
    }
}

updateBook(); */

/* Book.deleteOne({ title: "Updated Title 1" })
    .then(book => {
        console.log(book);
    })
    .catch(error => {
        console.error(error);
    }); */

/* async function deleteBook() {
    try {
        const result = await Book.deleteOne({ title: "Updated Title 2" });
        console.log(result);
    } catch(error) {
        console.error(error);
    }   
}

deleteBook(); */