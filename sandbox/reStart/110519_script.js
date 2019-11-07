const list = document.querySelector('ul');
const form = document.querySelector('form');
console.log(form)

const addRecipe = (recepies, id) => {
    let time = recepies.created_at.toDate();
    // console.log(id);
    let html = `
        <li data-id="${id}">
            <div>${recepies.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
    `;
    // console.log(html);
    list.innerHTML += html;
}
const deleteRecipe = (id) => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if(recipe.getAttribute('data-id') === id){
            recipe.remove();
        }
    });
}

db.collection('recepies').get().then((snapshot) => {
    // data
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach((doc)=>{
        // console.log(doc.data());
        // console.log(doc.id);
        addRecipe(doc.data(), doc.id);
    })
}).catch((err)=>{
    console.log(err);
});

// get document
db.collection('recepies').onSnapshot(snapshot => {
    // console.log(snapshot.docChanges());
    snapshot.docChanges().forEach((change) => {
        // console.log(change);
        const doc = change.doc;
        // console.log(doc);
        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id);
        } else if(change.type === 'removed'){
            deleteRecipe(doc.id);
        }
    });

});


// add document
form.addEventListener('submit', e => {
    e.preventDefault();

    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    db.collection('recepies').add(recipe).then(()=>{
        console.log('recipe added');
    }).catch((err) =>{
        console.log(err);
    })
});

// delte data

list.addEventListener('click', e => {
    console.log(e);
    if(e.target.tagName === "BUTTON"){
        // console.log('button');
        const id = e.target.parentElement.getAttribute('data-id');
        console.log(id);
        db.collection('recepies').doc(id).delete().then(()=>{
            console.log('recipe deleted');
        });
    }
})
