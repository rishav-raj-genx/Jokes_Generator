let pre = document.querySelector("pre");
let button = document.querySelector("button");

let api = "https://icanhazdadjoke.com/";

button.addEventListener("click", pr);


function pr() {
    let promise = new Promise((resolve, reject) => {

        fetch(api, {
            headers: {
                Accept: "application/json",
            },
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            resolve(data.joke);
        })
        .catch((error) => {
            reject(error);
        });

    })
    .then((res) => {
        pre.innerText = res;
    })
    .catch((error) => {
        pre.innerText = "API fetching failed!";
    });
}
