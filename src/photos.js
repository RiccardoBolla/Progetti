import { Photo } from "./models/Photo";

function load() {
  fetch("http://jsonplaceholder.typicode.com/photos")
    .then((resp) => resp.json())
    .then((photos) =>
      photos.map((photo) => new Photo(photo.id, photo.title, photo.url))
    );
}

console.log(load());
load();
