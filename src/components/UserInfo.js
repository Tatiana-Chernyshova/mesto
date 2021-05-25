export default class UserInfo {
  constructor({ nameSelector, jobSelector, userID }) {
    this._nameContainer = document.querySelector(nameSelector);
    this._jobContainer = document.querySelector(jobSelector);
    this._userID = userID;
  }

  // getUserInfo() {
  //   const userData = {
  //     myname: this._nameContainer.textContent,
  //     about: this._jobContainer.textContent
      
  //   }
  //   return userData;
  // }

  getUser() {
    return {
        user: this._userID,
    }
}

setUser({user, userID}) {
  if (user) {
      this._nameContainer.textContent = user;
      this._userID = userID;
      // console.log(userID)
  }
}

  // setUserInfo({ myname, about }) {

  //   this._nameContainer.textContent = myname;
  //   this._jobContainer.textContent = about;
  // }
}

