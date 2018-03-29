var url = "https://forbes400.herokuapp.com/api/forbes400/real-time";

$.get(url, function(response, status){
  console.log(response);
  for (var i = 0; i < 400; i++) {
    $(".narula").append(beauty(response[i]));
  }
});



function beauty(data) {
  const check = ( !data.squareImage || data.squareImage.includes("no-pic"));
  const imageUrl = check ? getImage(data): data.squareImage;
  return `<div class="col-sm-8 col-md-6 col-lg-4 bhagyas">
  <div class="card shadow">
    <img class="card-img-top" src=${imageUrl} alt=${data.name}>
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <h5 class="card-text">${(Math.floor(data.realTimeWorth)/ 1000).toFixed(2)} Billions </h5>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<br/>`;
}

function getImage(data) {
  let imageUrl = (data.gender == 'M') ? '/img/man.png' : '/img/woman.png';
  return imageUrl;
}
