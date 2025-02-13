// const DATABASE_URI = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=aba5bf7ed148aa16f4b98b67ac3b7952&hash=4b2946f4a570f2c31584a8176d77748b`;
// const DATABASE_URI2 = `http://gateway.marvel.com/v1/public/characters?name=${charName}ts=1&apikey=aba5bf7ed148aa16f4b98b67ac3b7952&hash=4b2946f4a570f2c31584a8176d77748b`;
// const TRIAL_URI = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=aba5bf7ed148aa16f4b98b67ac3b7952&hash=4b2946f4a570f2c31584a8176d77748b`;


// async function fetchData(index) {
//     const response = await fetch(DATABASE_URI);
//     const data = await response.json();
//     const specificData = data.data.results;
//     console.log(specificData[index].name);

// }

async function fetchData(charName) {
    const response = await fetch(`http://gateway.marvel.com/v1/public/characters?name=${charName}ts=1&apikey=aba5bf7ed148aa16f4b98b67ac3b7952&hash=4b2946f4a570f2c31584a8176d77748b`);
    const data = await response.json();
    return data;

}

document.addEventListener('DOMContentLoaded', async () => {
    const heroData = await fetchData("3-D Man");
    const infoElement = document.getElementById('display-info');

    infoElement.innerHTML = `
        <h2>${heroData.name}}<h2>
        <img src="${heroData.thumbnail}" alt="${heroData.name}">
        <h3>Description:</h3>
        <p>
            ${heroData.description}
        </p>

    `;
})

fetchData("3-D Man")

