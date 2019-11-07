
const cafelist = document.querySelector('#cafe-list');

// 
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');

    li.setAttribute('data-is', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;

    li.appendChild(name);
    li.appendChild(city);

    cafelist.appendChild(li);
}

db.collection('cafes').get().then((snapshot)=>{
    console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        // console.log(doc.data());
        renderCafe(doc);
    });
});