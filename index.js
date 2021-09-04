let tbody = document.getElementById('res');
const btndraw = document.querySelector('.draw');
const btndelete = document.querySelector('.delete');

function drawDarta() {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://rickandmortyapi.com/api/character', true);
  xhttp.send();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // const datos = JSON.parse(this.responseText)
      const data = JSON.parse(this.responseText).results;
      tbody.innerHTML = '';
      for (let character of data) {
        tbody.innerHTML += `
          <td><img src="${character.image}" width="50" alt=""></td>
          <td>${character.name}</td>
          <td>${character.gender}</td>
          <td>${character.species}</td>
          <td>${character.status}</td>
        `;
      }
    }
  };
}
function deleteData() {
  tbody.innerHTML = '';
}
btndraw.addEventListener('click', drawDarta);
btndelete.addEventListener('click', deleteData);
