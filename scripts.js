const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

loadBtn.addEventListener("click", function (evt) {
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`)
      .then((data) => data.json())
      .then(
        (data) => { 
          resultsContainer.innerHTML = 
            `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span></p>
                <p> О себе: <span>${data.bio}</span></p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span></p>
            </div>`
          axios
              .get('https://jsonplaceholder.typicode.com/users')
              .then(
                  (res) =>
                      (res.data.forEach(element => {
                        resultsContainer.insertAdjacentHTML(
                            'beforeend',
                            `<div class="response-container elements">
                            <p> Имя: <span>${element.name}</span></p>
                            <p> Никнейм: <span>${element.username}</span></p>
                            <p> E-mail: <span>${element.email}</span></p>
                            <br/>
                            <div class="blockUser"> 
                              <div> Адрес: </div>
                              <p> Улица: <span>${element.address.street}</span></p>
                              <p> Город: <span>${element.address.city}</span></p>
                              <p> Почтовый индекс: <span>${element.address.zipcode}</span></p>
                            </div>
                            <br/>
                            <p> Телефон: <span>${element.phone}</span></p>
                            <p> Сайт: <span>${element.website}</span></p>
                            </br>
                            <div class="blockUser"> 
                              <div> Компания: </div>
                              <p> Название: <span>${element.company.name}</span></p>
                              <p> Слоган: <span>${element.company.catchPhrase}</span></p>
                              <p> Описание: <span>${element.company.bs}</span></p>
                            </div>
                            </br>
                  
                          </div>`
                        );
                      }))
                )
        }
  );
});
