export default class UserInfo {
  constructor({ nameSelector, jobSelector, profileAvatar }) {
    this._nameContainer = document.querySelector(nameSelector);
    this._jobContainer = document.querySelector(jobSelector);
    this._profileAvatar = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    const userData = {
      name: this._nameContainer.textContent,
      about: this._jobContainer.textContent
    }
    return userData;
  }

  setUserInfo(data) {
    if (data.name) {
        this._nameContainer.textContent = data.name;
    }
    if (data.about) {
      this._jobContainer.textContent = data.about;
    }
    if (data.avatar) {
      this._profileAvatar.src = data.avatar;
    }
  }
}
