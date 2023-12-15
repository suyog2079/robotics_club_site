const Http = new XMLHttpRequest();
const url='https://www.googleapis.com/drive/v3/drives';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}

const drivePhotosId = [
  '1EH6CkWErvD40nmqWu_IgsuumcJkUgcxm',
];

let galleryHtml = '';
export function galleryHtmlGen() {
  drivePhotosId.forEach(id => {
    galleryHtml += `
  <div class="photo_container">
        <img alt="gallery" class="photos_container" src="https://drive.google.com/uc?export=view&id=${id}" />
      </div>
  `
  });

  document.querySelector(".photos_grid").innerHTML = galleryHtml;
}