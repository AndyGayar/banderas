
fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data => {
  var banderas = document.getElementById("banderas");
  for (var i in data) {
    var img = document.createElement("img");
    img.src = data[i].flags.png;
    img.alt=data[i].name.common;
    banderas.appendChild(img);
  }
})
.catch(error => console.error(error));