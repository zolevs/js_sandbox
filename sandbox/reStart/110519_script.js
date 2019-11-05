const list = document.querySelector('ul');

const addRecepie = (recepies) =>{
    // console.log(recepies.created_at.toDate());
    let time = recepies.created_at.toDate();
    let html = `
        <li>
            <div>${recepies.tite}</div>
            <div>${time}</div>
        </li>
    `;
   list.innerHTML += html;
}

db.collection('recepies').get().then((snapshot) => {
    // data
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        addRecepie(doc.data());
    });
}).catch((err)=>{
    console.log(err);
})

