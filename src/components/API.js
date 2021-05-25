export default class Api {
  constructor({ address, token }) {
    // тело конструктора
    this._address = address;
    this._token = token;
    // this._groupId = groupId;
  }
  // constructor(options) {
  //   this._options = options;
  //   this._baseUrl = this._options.baseUrl;
  //   this._headers = this._options.headers;
  // }



  getCards() {
    return fetch(`${this._address}/cards`, {
      headers: {
        authorization: this._token,
      }})
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
    
  }


  createCards(data) {
    return fetch(`${this._address}/cards`, {
      method: 'POST',
      headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // message: data.message,
        // user: data.user,
        // owner: data.owner
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
  }

  getUserData() {
    return fetch(`${this._address}/users/me`, {
      headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
      },
      // body: JSON.stringify({
      //   // message: data.message,
      //   // user: data.user,
      //   // owner: data.owner
      //   name: "Байкал",
      //   link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
      // })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
  }

  // addCard({ name, link }) {
  //       // console.log(link)
  //   return fetch(`${this._baseUrl}/cards`, {
  //     method: 'POST',
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       name: name,
  //       link: link
  //     })
  //   })
  // }


  // deleteCard({ _id }) {
  //     console.log(_id)
  //   return fetch(`${this._baseUrl}/cards/${_id}`, {
  //     method: 'DELETE',
  //     headers: this._headers,
  //     // body: JSON.stringify({
  //     //   name: name,
  //     //   link: link
  //     // })
  //   })}

  //   // Данные пользователя 
  //   getUserData() {
  //     return fetch(`${this._baseUrl}/users/me`, {
  //       headers: this._headers,
  //     })
  //     .then(result => {
  //       if (result.ok) {
  //         return result.json()
  //       } else {
  //         return Promise.reject(result.status)
  //       }
  //     })
  //   }

}


