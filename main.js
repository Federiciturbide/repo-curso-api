const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_S7PW7IuCVSwEaXUes1rF8DpT8hA3v8J1bEppD5P0YwFTV5MD3eb6VjnszUZY7oF7';


async function reload () {
    const res = await fetch(API_URL);
    const data = await res.json();

    console.log(data);
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
}

const myButton = document.querySelector("button");
myButton.onclick = reload;
reload();
