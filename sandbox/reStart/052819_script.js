document.querySelector('button#getText').addEventListener('click', function(){
    fetch('text.txt')
        .then(response => response.text())
        .then(text => console.log(text))
        .catch(error => console.log('There was an error: ', error));
});

document.querySelector('button#getFile').addEventListener('click', function(){
    fetch('images/fruit.jpg')
        .then(response => response.blob())
        // .then(blob => console.log(blob))
        .then(blob => console.log(blob.type))

        .catch(error => console.log('There was an error: ', error));
});

document.querySelector('button#get').addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => console.log(json.title))
        .catch(error => console.log('There was an error: ', error));
});


let post = {
    title: 'some title',
    body: 'Some body',
    userId: 99
}


document.querySelector('button#post').addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            "content-type" : "application/json"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log('There was an error: ', error));
});

let updatePost ={
    title: 'Some title',
    body: 'Some body 2',
    userId: 101,
    id: 1
}

document.querySelector('button#update').addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
            "content-type" : "application/json"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log('There was an error: ', error));
});

// DELETE
document.querySelector('button#delete').addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    })
    .then(response => console.log(response.json()));
  });