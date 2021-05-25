export default class Api {
  // constructor({ address, token }) {
  //   // тело конструктора
  //   this._address = address;
  //   this._token = token;
  //   // this._groupId = groupId;
  // }
  constructor(options) {
    this._options = options;
    this._baseUrl = this._options.baseUrl;
    this._headers = this._options.headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {headers: this._headers})
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  addCard({ name, link }) {
        console.log(link)
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
  }

  deleteCard({ _id }) {
    console.log(_id)
//     return fetch(`${this._baseUrl}/cards`, {
//       method: 'DELETE',
//       headers: this._headers,
//       body: JSON.stringify({
//         name: name,
//         link: link
//       })
// })
}

  // getInitialCards() {
  //   return fetch(this._address, {
  //     headers: {
  //       authorization: this._token
  //     }
  //   })
  //     .then(res => res.json())
  //     // .then((result) => {
  //     //   console.log(result);
  //     // }); 
  // }

  // createCards(data) {
  //   return fetch(this._address, {
  //     headers: {
  //       authorization: this._token
  //     }
  //   })
  //     .then((result) => {
  //       if (result.ok) {
  //         return result.json();
  //       } else {
  //         return Promise.reject(`Error: ${result.status}`)
  //       }
  //     }); 
  // }
}
