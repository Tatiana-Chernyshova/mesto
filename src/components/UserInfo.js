export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameContainer = document.querySelector(nameSelector);
    this._jobContainer = document.querySelector(jobSelector);
  }

  getUserInfo() {
    const userData = {
      myname: this._nameContainer.textContent,
      about: this._jobContainer.textContent
    }
    return userData;
  }

  setUserInfo({ myname, about }) {
    this._nameContainer.textContent = myname;
    this._jobContainer.textContent = about;
  }
}

