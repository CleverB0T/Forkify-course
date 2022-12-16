import View from "./view.js";
import previewView from "./previewView.js";
import icons from "url:../../img/icons.svg"; // Parcel 2

class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark.`;
  _message = ``;

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    // console.log(this._data);
    return this._data
      .map(bookmarks => previewView.render(bookmarks, false))
      .join("");
  }
}

export default new BookmarksView();
