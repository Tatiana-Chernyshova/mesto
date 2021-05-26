export default class UserInfo {
  constructor({ nameSelector, jobSelector, userID }) {
    this._nameContainer = document.querySelector(nameSelector);
    this._jobContainer = document.querySelector(jobSelector);
    this._userID = userID;
  }

  getUserInfo() {
    const userData = {
      name: this._nameContainer.textContent,
      about: this._jobContainer.textContent
      
    }
    return userData;
  }

//   getUserInfo() {
//     return {
//         user: this._userID,
//     }
// }

setUserInfo(data) {
  if (data) {
      this._nameContainer.textContent = data.name;
      this._jobContainer.textContent = data.about;
      this._userID = data.userID;
      // console.log(data.name)
  }
}

  // setUserInfo({ myname, about }) {

  //   this._nameContainer.textContent = myname;
  //   this._jobContainer.textContent = about;
  // }
}

