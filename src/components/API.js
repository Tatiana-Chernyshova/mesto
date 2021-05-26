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




  getUserData() {
    return fetch(`${this._address}/users/me`, {
      headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
      },
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
  }

  setUserData(data) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // message: data.message,
        // user: data.user,
        // owner: data.owner
        name: data.name,
        about: data.about
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
  }

  addCard(data) {
  return fetch('https://nomoreparties.co/v1/cohort-24/cards', {
    method: 'POST',
    headers: {
      authorization: '36ca9ef1-bd1d-492c-84aa-4de20805470a',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      link: data.link
    })
  })
      .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
  }

  deleteCards(id) {
    return fetch(`${this._adress}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      })
  }

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


}


