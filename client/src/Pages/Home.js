import React, { useState, useEffect } from 'react';
import CurrentBook from '../Components/CurrentBook';

let localURL = "http://localhost:8080/api/books/";

function Home() {
  const [currentBook, setCurrentBook] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/books/current")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCurrentBook(result);
          console.log(result)
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])

  function setFinished(e) {
    var bookIdToUpdate = e;
    var currentStatus = "no";
    fetch(localURL + `${bookIdToUpdate}`,
    {
      method: 'put',
      headers: new Headers({
       'Content-Type': 'application/json',
      }),
     body: JSON.stringify( {current: currentStatus} )
    });
    currentBook.map(book =>
      (book._id === bookIdToUpdate) ? {...book} : book) // I think this can be modified
      setCurrentBook([]) 
  }

  function updateCurrentPage(e, currentPage) {
    let currPage = currentPage.currentPage;
    let bookIdToUpdate = e;
    
    fetch(localURL + `${bookIdToUpdate}`, 
    {
      method: 'put',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify( {currentPage: currPage} )
    })
    const newBook = currentBook.map(book =>
      (book._id === bookIdToUpdate) ? {...book, currentPage: currPage} : book) // I think this can be modified
      setCurrentBook([...newBook])
  }

  return (
    <div>
      <h2>Currently Reading</h2>
      {currentBook.map((field) => (
        <CurrentBook 
          key={field._id}
          id={field._id}
          title={field.title === undefined ? "No current book, get to reading!" : field.title}
          img={field.img}
          author={field.author}
          desc={field.desc === undefined ? "No book description" : field.desc}
          pageCount={field.pageCount}
          currentPage={field.currentPage}
          onCompleted={setFinished.bind(this, field._id)}
          onUpdatePage={updateCurrentPage.bind(this, field._id)}
        />
      ))}
    </div>
  );
}

export default Home;