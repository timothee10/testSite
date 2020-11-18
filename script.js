// Create your variables here
// ==========================================
let m = document.getElementById("music");
let numberOfSeasons=10;
let numberOfEpisodes=6;
let bool=1;
// ==========================================

/**let paragraph = document.querySelector('#info');**/
let paragraph = document.getElementById("info");
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season`




function myFunction() {

  if (bool==1)
  {
    m.play();

    window.setTimeout(pause,100000)

    let a = document.getElementById("demo");
    document.getElementById("demo").innerHTML=bool
    bool=2;
  }
  else {
    if (true) {

      document.getElementById("demo").innerHTML=bool
      m.pause();
      bool=1
    }
  }
}


function pause() {
  let m = document.getElementById("music");
  m.pause();


}
