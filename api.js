async function fetchData() {
    const response = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=aba5bf7ed148aa16f4b98b67ac3b7952&hash=4b2946f4a570f2c31584a8176d77748b`);
    const data = await response.json();
    return data.data.results;

}

document.addEventListener('DOMContentLoaded', async () => {
    const heroData = await fetchData();
    const infoElement = document.getElementById('display-info');


    const firstCharacter = heroData[0];
    const secondCharacter = heroData[1];
    const thirdCharacter = heroData[2];
    const fourthCharacter = heroData[3];
    const fifthCharacter = heroData[4];

    infoElement.innerHTML = `
        <ul>
            <li>${firstCharacter.name}</li><br>
            <li>${secondCharacter.name}</li><br>
            <li>${thirdCharacter.name}</li><br>
            <li>${fourthCharacter.name}</li><br>
            <li>${fifthCharacter.name}</li><br>
        </ul>    


    `;
})

fetchData()

