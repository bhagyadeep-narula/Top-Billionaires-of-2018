const url = "https://forbes400.herokuapp.com/api/forbes400/real-time";

$.get(url, function(response, status){
  console.log(response)
  for (var i = 0; i < 100; i++) {
    $(".narula").append(beauty(response[i]))
  }
})



function beauty(data) {
  return `<div class="col-sm-8 col-md-6 col-lg-4 bhagyas">
  <div class="card shadow">
    <img class="card-img-top" src=${data.squareImage} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <h5 class="card-text">${data.realTimeWorth}</h5>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<br/>`
}
