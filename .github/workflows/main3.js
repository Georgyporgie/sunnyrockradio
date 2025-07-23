// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
 
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
 
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
 









// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;
 
// Create the audio element for the player
let curr_track = document.createElement('audio');
 
// Define the list of tracks that have to be played
let track_list = [
  






















 


















































 










{
    name: "Welcome!",
    artist: "Play Sunny Rockradio  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },






 






































































































































 















{
    name: " Welcome!",
    artist: "Play Sunny Rockradio  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/let's go back.mp3",
  },








{
    name: " Whole lotta Rosie",
    artist: "ACDC",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/ACDC - Whole lotta Rosie.mp3",
  },




{
    name: "Welcome!",
    artist: "Play Sunny RockRadio  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },



{
    name: "Welcome!",
    artist: "Play Sunny RockRadio  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },
 
 



 
   {
    name: "Welcome!",
    artist: "Sunny Rockradio  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },







{   
    name: "Welcome",
    artist: "Play Sunny Rockradio  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },




{
    name: " Miami Vice Theme",
    artist: "Jan Hammer",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Miami Vice Theme-  Jan Hammer.mp3",
  },








 {
    name: "Snippet",
    artist: "Play Sunny RockRadio ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },



{
    name: "New Gold Dream ",
    artist: "Simple Minds ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/New Gold dream - Simple Minds.mp3",
  },





{
    name: " Welcome!",
    artist: "Propaganda  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },



 



{
    name: "Fade To Grey",
    artist: "Visage",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you333.mp3",
  },











{
    name: " Drive",
    artist: "The Cars",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/The Cars - Drive.mp3",
  },



{
    name: "  Duel (12inch)",
    artist: "Propaganda",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Propaganda - Duel.mp3",
  },


{
    name: "  Nature Is Beauty ",
    artist: "Bjork  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Bjork - Nature is beauty.mp3",
  },




{
    name: "Todays News",
    artist: "Sunny Journaal",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


}, 




{

    name: " First You Jump",
    artist: "Simple Minds  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/recent/Simple Minds - First you jump.mp3",
  },



{
     name: "Welcome",
    artist: "Play Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },




{  
    name: "Sirius ",
    artist: "Alan Parsons Project ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Alan Parsons Project -Sirius.mp3",
  },

 {
    name: " Child In Time",
    artist: "Deep Purple ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Deep Purple - Child in time.mp3",
  },
 



{  
    name: " Private Dancer (12inch)",
    artist: "Tina Turner ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Tina Turner - Private Dancer.mp3",
  },






{
    name: " Bohemian Rapsodhy",
    artist: "Queen",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: " muziek/muziek01/Queen - Bohemian Rapsodhy.mp3",
  },









{
    name: " Todays News",
    artist: "Sunny Journaal",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


}, 

{

    name: "Nothing's Gonna Stop Us Now (1986)",
    artist: "Starship ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek02/Starship - Nothing's Gonna Stop Us Now.mp3",
  },














{  
    name: " Vienna ",
    artist: "Ultravox  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Ultravox - Vienna.mp3",
  },





{
    name: "Welcome!",
    artist: "Play Sunny rockradio ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },





{  
    name: " Everywhere",
    artist: "Fleetwood Mac  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek02/Fleetwood Mac - Everywhere.mp3",
  },

{  
    name: " Heroes",
    artist: "David Bowie ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/David Bowie - Heroes.mp3",
  },


{  
    name: "Dogs ",
    artist: "Pink Floyd ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek02/02 Dogs.mp3",
  },





 










{

    name: "Radio Ga GA (12inch)",
    artist: "Queen ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Radio Ga Ga (12'' Extended Version).mp3",
  },

{
    name: " Candy (12inch) ",
    artist: "Iggy Pop",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Iggy Pop - Candy.mp3",
  },


{
    name: " Dollar Days",
    artist: "David Bowie",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/06 Dollar Days.mp3",
  },
 




{
    name: " Two Tribes",
    artist: "Frankie Goes To Hollywood",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Frankie goes to hollywood - Two tribes.mp3",
  },





{
    name: " She 's Not There",
    artist: "Santana",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Santana - She 's not there.mp3",
  },
{
    name: " Black Velvet",
    artist: "Alannah Miles",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Black Velvet -  Alannah Miles.mp3",
  },



 
 {
    name: "  Sunny radio jingle",
    artist: "Sunny Time ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },


{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  },







{




    name: " Gimme All Your Lovin (12inch)",
    artist: "ZZ Top ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/ZZ top - Gimme all your lovin'.mp3",
  }, 







{  
    name: " Miss You (12inch)",
    artist: "Rolling Stones",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Rolling Stones - Miss you.mp3",
  },












 



{  
    name: "Everybody Wants To Rule The World (1985)",
    artist: "Tears For Fears",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Tears for fears - Everybody wants to rule the world.mp3",
  },





{
    name: " Low",
    artist: "Lenny Kravitz ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Lenny Kravitz - Low.mp3",
  },



{
    name: "Welcome!",
    artist: "Listen Live Sunny Rockradio ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle3.mp3",
  },







{  
    name: " Lucifer ",
    artist: "Alan Parsons Project  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Alan Parsons Project - Lucifer.mp3",
  },


 


 



{
    name: " Todays News",
    artist: "Sunny Journaal",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


}, 





{  
    name: "  Little Lies ",
    artist: "Fleetwood Mac",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek02/Fleetwood Mac -Little Lies.mp3",
  },








  
 {
    name: "Snippet",
    artist: "Sunny radio",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio snippet4.mp3",
  },


{
    name: "Welcome!",
    artist: "Play Sunny Rockradio  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },









































{




    name: " Happiness",
    artist: "Jonathan Jeremiah   ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Jonathan Jeremiah -  Happiness.mp3",
  },







{




    name: "Lost",
    artist: "Jonathan Jeremiah   ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Jonathan Jeremiah -  Lost.mp3",
  },














{  
    name: " Nutbush City Limits",
   artist: "Ike & Tina Turner ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek02/Ike & Tina Turner - Nutbush City.mp3",
  },






{
    name: "Black Velvet",
    artist: "Alannah Miles",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Black Velvet -  Alannah Miles.mp3",
  },






{
    name: " This Is Not America (12inch)",
    artist: "David Bowie ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek01/David Bowie - This Is Not America.mp3",
  },











{

    name: " Riptide",
    artist: "Vance Joy ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek02/Vance Joy - Riptide.mp3",
  },






{

    name: "Pinball Wizard",
    artist: "The Who ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/The who - Pinball Wizard.mp3",
  },





{  
    name: " Alone",
    artist: "Heart  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek02/Heart - Alone.mp3",
  },




{
    name: "Welcome!",
    artist: "Play Sunny Rockradio  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },















































































































 

























{
    name: " School",
    artist: "Supertramp",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Supertramp - School.mp3",
  },





















 

 




{
    name: " Meddle (1971)",
    artist: "Pink Floyd",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Pink Floyd - Meddle.mp3",
  },







{
    name: " Todays News",
    artist: "Sunny Journaal",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


}, 





{
    name: "Dont You (12inch)",
    artist: "Simple Minds",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Simple Minds Dont you.mp3",
  },





































{
    name: " A View To A Kill (12 Extended Mix)",
    artist: "Duran Duran",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Duran Duran - A View To A Kill (12 Extended Mix).mp3",
  },

 



{
    name: "Welcome!",
    artist: "Play Sunny rockradio ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },
 








  



{
    name: " Won't Get Fooled Again",
    artist: "The Who",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/The Who - Won't get fooled again.mp3",
  },



{
     name: "Welcome",
    artist: "Play Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },







{
    name: " Too Shy (12inch)",
    artist: "Kajagoogoo",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Kajagoogoo - Too Shy.mp3",
  },








{
     name: "Welcome!",
    artist: "Listen Live Sunny Rockradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },






{  
    name: " Broken Wings",
    artist: "Mr Mister",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Mr Mister - Broken Wings.mp3",
  },



{
    name: " Lucky Number (1979)",
    artist: "Lene Lovich  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Lene Lovich - Lucky Number.mp3",
  },





{
    name: " Welcome!",
    artist: "Play Sunny RockRadio  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },





 {
    name: "Snippet",
    artist: "Play Sunny RockRadio ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },



 {

    name: " The Fifth 1969",
    artist: "Ekseption  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Ekseption - the fifth 1969.mp3",
  },












{



    name: " Big Log",
    artist: "Robert Plant",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Robert Plant - Big Log.mp3",
  },




{
    name: " Lust For Life (live)",
    artist: "Iggy Pop",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Iggy Pop - Lust for live (live).mp3",
  },

 {
    name: "Snippet",
    artist: "Play Sunny RockRadio ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },



{  
    name: " Boys Keep Swinging",
    artist: "David Bowie  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/David Bowie - Boys Keep Swinging.mp3",
  },





{
    name: " Right Between The Eyes (12inch)",
    artist: "Wax ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Wax - Right between the eyes.mp3",
  },



{
    name: " Unconfortably Numb",
    artist: "Pink Floyd ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Pink Floyd - Unconfortably numb.mp3",
  },



 {
    name: "Todays News",
    artist: "Sunny Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  


},




{
    name: "Fade To Grey",
    artist: "Visage",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },




{
    name: " Peter Gunn",
    artist: "Emmerson Lake & Palmer",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Emmerson Lake & Palmer - Peter Gunn.mp3",
  },
 
 






{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },



{
    name: "Just For You",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },

{
    name: "Learning To Fly",
    artist: "Pink Floyd",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/PinkFloyd - Eagle.mp3",
  },






{

    name: " Revermation Bell",
    artist: "Pink Floyd",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Pink Floyd - Revermation Bell.mp3",
  },




{



    name: " Stairway To Heaven",
    artist: "Led Zeppelin",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Led Zeppelin - Stairway to heaven.mp3",
  },










{
    name: " Black Betty",
    artist: "Ram Jam",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Ram Jam - Black Betty.mp3",
  },


























];



















function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap elements
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }

  return array;
}



     




function loadTrack(track_index) {
  if (!track_list[track_index]) return;

  // Increment and sort by play count
  track_list[track_index].playCount += 1;
  sortTracksByPlayCount();
   
  







// Reset old track and create new one
  clearInterval(updateTimer);
  resetValues();

  curr_track = new Audio(track_list[track_index].path); // ⬅️ New audio object
curr_track.volume = getTimeBasedVolume();
curr_track.load();

  

curr_track.addEventListener("loadedmetadata", () => {
  const duration = curr_track.duration;
  console.log("📀 Metadata loaded for:", track.name);
  console.log("🕰️ Track duration:", duration, "seconds");

  // Determine fade timing
  let fadeTime, fadeStart;

  if (track.quickFade) {
    // 💨 Quick fade logic
    fadeTime = 2000;                  // Duration of fade
    fadeStart = (duration * 1000) - 5000;  // Start 5 sec before end
    console.log("⚡ Quick fade mode active");
  } else if (duration > 180) {
    // 🕯️ Default fade for long tracks
    fadeTime = 3000;
    fadeStart = (duration * 1000) - 3000;
    console.log("⏱️ Standard fade for track >3min");
  } else {
    // 🚫 No fade needed
    console.log("🚫 No fade scheduled — short track or no flag");
    return;
  }

  // Schedule fade
  if (fadeStart > 0) {
    console.log(`⏳ Scheduled ${fadeTime / 1000}s fade in ${fadeStart}ms for:`, track.name);
    setTimeout(() => fadeOut(curr_track, fadeTime), fadeStart);
  }
});






// Apply volume logic
  adjustVolumeDynamically(curr_track);

 







  // Update UI details
  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  // Start updating the seek bar
  updateTimer = setInterval(seekUpdate, 1000);

  // Autoplay when the track is ready
  curr_track.addEventListener("canplay", handleAutoplay);

  // Trigger next track when finished
  curr_track.addEventListener("ended", nextTrack);

  // Highlight the active track visually
  let allTracks = document.querySelectorAll('ol li');
  allTracks.forEach(track => track.classList.remove('blinking'));
  if (allTracks[track_index]) {
    allTracks[track_index].classList.add('blinking');
  } else {
    console.error("Filtered track not found in the DOM!");
  }
let blinkingLi = document.querySelector(`li[data-track-index="${track_index}"]`);
if (blinkingLi) {
  blinkingLi.classList.add('blinking');
} else {
  console.warn("No matching track element found to blink.");
}

  // Add a bit of flair
  random_bg_color();
}


function handleAutoplay() {
  normalizeVolume();
  curr_track.play().catch(err => {
    console.warn("Autoplay prevented:", err);
  });
  curr_track.removeEventListener("canplay", handleAutoplay);
}




function nextTrack() {
  // Go back to the first track if the current one is the last in the track list
  if (track_index < track_list.length - 1)
    track_index += 1;
  else
    track_index = 0; 

  // Sort the track list by play count
  sortTracksByPlayCount();

  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}















































































function sortTracksByPlayCount() {
  track_list.sort((a, b) => b.playCount - a.playCount);
}

function displayPlayCounts() {
  sortTracksByPlayCount();
  track_list.forEach((track, index) => {
    console.log(`Track ${index + 1}: ${track.name} - ${track.playCount} plays`);
  });
}

// Call displayPlayCounts() to see play counts in the console
displayPlayCounts();
















function initializePlayCount(tracks) {
  tracks.forEach(track => {
    if (track.playCount === undefined) {
      track.playCount = 0;
    }
  });
}
	
// Call the function to initialize play counts
initializePlayCount(track_list);

























function random_bg_color() {
  // Get a random number between 64 to 256
  // (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;
 
  // Construct a color withe the given values
  let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
 
  // Set the background to the new color
  
}
 
// Function to reset all values to their default
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}



function playpauseTrack() {
  // Switch between playing and pausing
  // depending on the current state
  if (!isPlaying) playTrack();
  else pauseTrack() ;
playpause_btn.innerHTML = '<img id= "med"  src="images/pause.png">';

}
 


function playTrack() {
    if (!curr_track) {
        console.error("Error: `curr_track` is undefined!");
        return;
    }

    curr_track.play();
    isPlaying = true;

  // Replace the play icon with the pause icon
  playpause_btn.innerHTML = '<img id="media" src="images/pause66.gif">';



}


































 



function seekTo() {
  // Calculate the seek position by the
  // percentage of the seek slider
  // and get the relative duration to the track
  seekto = curr_track.duration * (seek_slider.value / 100);
 	
  // Set the current track position to the calculated seek position
  curr_track.currentTime = seekto;
}
 
function setVolume() {
  // Set the volume according to the
  // percentage of the volume slider set
  curr_track.volume = volume_slider.value / 100;
}
 
function seekUpdate() {
  let seekPosition = 0;
 
  // Check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;
 
    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
 
    // Add a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
 
    // Display the updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}


function shufflePlaylist(array) {
    return array.sort(() => Math.random() - 0.5); // Randomizes order
}

// Shuffle the playlist once before playback starts
track_list = shufflePlaylist(track_list);

loadTrack(track_index); // Load the first (randomized) track


// Load the first track in the tracklist
loadTrack(track_index);




$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("fast");
    $("#div3").fadeIn(0);
  });
});


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction1() {
  var x = document.getElementById("myLinks");
  

if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

 $('.btn').click(function () {
            $(this).toggleClass("click");
        });



document.getElementById("hero-image")
 .addEventListener("touchstart",
  displayMessage);

function displayMessage() {
 document.getElementById("message")
  .innerHTML = "Hi I am Iggy Pop, what's your name?";
}


























// Function to emphasize the words "classic", "maxi", "12inch", and "new" in a given text
function emphasizeKeywords(text) {
  return text.replace(/(classic|maxi|12inch|new|\b\d{4}\b)/gi, function(match) {
    if (match.toLowerCase() === 'new') {
      return '<em class="blinking-new">' + match + '</em>';
    }
    return '<em>' + match + '</em>';
  });
}

// Create the ordered list and append it to the body
let ol = document.createElement('ol');
document.body.appendChild(ol);

// Function to create a list item for each track
function createListItem(track) {
  let li = document.createElement('li');

  let emphasizedTrackName = emphasizeKeywords(track.name);
  let emphasizedArtist = emphasizeKeywords(track.artist);

  // Style the word "by" with light blue color
  let coloredBy = ' <span style="color: goldenrod;">by</span> ';

  let trackInfo = document.createElement('div');
  trackInfo.innerHTML = `<strong>${emphasizedTrackName}</strong>${coloredBy}${emphasizedArtist}`;
  li.appendChild(trackInfo);

  let audio = document.createElement('audio');
  audio.controls = false;
  let source = document.createElement('source');
  source.src = track.path;
  source.type = "audio/mpeg";
  audio.appendChild(source);
  li.appendChild(audio);

  return li;
}

// Filter the track list to exclude tracks with 'Sunny' in the artist's name
let filteredTrackList = track_list.filter(track => !track.artist.toLowerCase().includes('pie'));

// Limit the filtered track list to 20 tracks
let limitedTrackList = filteredTrackList.slice(0, 20);

// Add each track to the ordered list
limitedTrackList.forEach(track => {
  ol.appendChild(createListItem(track));
});

// Append the ordered list to the placeholder div
document.getElementById('track-list-container').appendChild(ol);





//summary 21 - 40


// Create the summary element for tracks 21 to 40
let summaryElement1 = document.createElement('summary');
summaryElement1.textContent = 'tracks 20 to 40';

// Create a details element and append the summary to it
let detailsElement1 = document.createElement('details');
detailsElement1.appendChild(summaryElement1);

// Create the ordered list, set start attribute to 21, and add tracks 21 to 40
let additionalTrackList1 = filteredTrackList.slice(20, 40);
let additionalOl1 = document.createElement('ol');
additionalOl1.setAttribute('start', 20);

additionalTrackList1.forEach(track => {
  additionalOl1.appendChild(createListItem(track));
});

// Append the ordered list to the details element
detailsElement1.appendChild(additionalOl1);

// Append the details element to the placeholder div
document.getElementById('track-list-container').appendChild(detailsElement1);















// Create the summary element for tracks 41 to 60
let summaryElement2 = document.createElement('summary');
summaryElement2.textContent = 'tracks 40 to 60';

// Create a details element and append the summary to it
let detailsElement2 = document.createElement('details');
detailsElement2.appendChild(summaryElement2);

// Create the ordered list, set start attribute to 41, and add tracks 41 to 60
let additionalTrackList2 = filteredTrackList.slice(40, 60);
let additionalOl2 = document.createElement('ol');
additionalOl2.setAttribute('start', 40);

additionalTrackList2.forEach(track => {
  additionalOl2.appendChild(createListItem(track));
});

// Append the ordered list to the details element
detailsElement2.appendChild(additionalOl2);

// Append the details element to the placeholder div
document.getElementById('track-list-container').appendChild(detailsElement2);
























































