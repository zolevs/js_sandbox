// json

let companies = 
`[
    {
        "name": "Big Corporation",
        "numberOfEmployees": 1000,
        "ceo": "Mary",
        "rating": 4.3
    },
    {
        "name": "Mid Corporation",
        "numberOfEmployees": 500,
        "ceo": "Gary",
        "rating": 6.3
    },
    {
        "name": "Small Corporation",
        "numberOfEmployees": 3,
        "ceo": null,
        "rating": 1.3
    }
]`;

console.log(JSON.parse(companies));
console.log(JSON.parse(companies)[1]);
console.log(JSON.parse(companies)[2].name);