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
 

function nextTrack() {
  // Go back to the first track if the
  // current one is the last in the track list
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
 
  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}


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
    artist: "Listen Live Sunny Rockradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },



{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },














{
    name: " Black Betty",
    artist: "Ram Jam",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Ram Jam - Black Betty.mp3",
  },

{
    name: "Welcome!",
    artist: "Play Sunny hotradio  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
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
    name: "First You Jump",
    artist: "Simple Minds",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jockeys/40 in jingle33.mp3",
  },


{
    name: " Welcome!",
    artist: "Sunny  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
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

    name: " The Fifth 1969",
    artist: "Ekseption  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Ekseption - the fifth 1969.mp3",
  },









{
    name: " Child In Time",
    artist: "Deep Purple ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Deep Purple - Child in time.mp3",
  },
 
 {
    name: "  Child In Time",
    artist: "Deep Purple   ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },









{  
    name: " Miss You (12inch)",
    artist: "Rolling Stones",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Rolling Stones - Miss you.mp3",
  },
{
    name: "Just For You",
    artist: "Sunny Ship",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  },






 {
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  


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




    name: "Lost",
    artist: "Jonathan Jeremiah   ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Jonathan Jeremiah -  Lost.mp3",
  },


{
    name: " Two Tribes",
    artist: "Frankie Goes To Hollywood",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Frankie goes to hollywood - Two tribes.mp3",
  },


{
    name: "First You Jump",
    artist: "Simple Minds",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jockeys/40 in jingle12.mp3",
  },

{




    name: " Gimme All Your Lovin (12inch)",
    artist: "ZZ Top ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/ZZ top - Gimme all your lovin'.mp3",
  }, 












{
    name: " Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


}, 



{  
    name: " Boys Keep Swinging",
    artist: "David Bowie  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/David Bowie - Boys Keep Swinging.mp3",
  },


{
    name: "First You Jump",
    artist: "Simple Minds",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jockeys/40 in jingle12.mp3",
  },

{  
    name: " Lucifer ",
    artist: "Alan Parsons Project  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Alan Parsons Project - Lucifer.mp3",
  },



 

{
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  


},





{
    name: "Welcome!",
    artist: "Play Sunny rockradio ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
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
    name: " Melting Pot",
    artist: "Booker T. And The Mg's ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Booker T. and the mg's - Melting pot.mp3",
  },




 {
    name: " Duel",
    artist: "Propaganda  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },

 
 




{
   
    name: "Duel",
    artist: "Propaganda  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },



{
     name: "Welcome",
    artist: "Play Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },


{
    name: "First You Jump",
    artist: "Simple Minds",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jockeys/40 in jingle.mp3",
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
    name: " Black Velvet",
    artist: "Alannah Miles ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
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
    name: "Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/nMW5jgc/jazzdivas.png",
    path: "muziek/reklame/reklame1.mp3",
  


},
{  
    name: " Broken Wings",
    artist: "Mr Mister",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Mr Mister - Broken Wings.mp3",
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
    name: " Peter Gunn",
    artist: "Emmerson Lake & Palmer",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Emmerson Lake & Palmer - Peter Gunn.mp3",
  },
 
 
 {
    name: " Peter Gunn",
    artist: "Emmerson Lake & Palmer",
   image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
  },


 
{
    name: "First You Jump",
    artist: "Simple Minds",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jockeys/40 in jingle12.mp3",
  },







{
    name: " Welcome!",
    artist: "Propaganda  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle4.mp3",
  },

 {
    name: " Duel",
    artist: "Propaganda  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },

 
 {
   
    name: " Duel",
    artist: "Propaganda  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio snippet5.mp3",
  },


{
    name: "Fade To Grey",
    artist: "Visage",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you333.mp3",
  },




{
    name: "Black Velvet",
    artist: "Alannah Miles",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Black Velvet -  Alannah Miles.mp3",
  },

 












{
    name: " Bohemian Rapsodhy",
    artist: "Queen",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: " muziek/muziek01/Queen - Bohemian Rapsodhy.mp3",
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




    name: " Happiness",
    artist: "Jonathan Jeremiah   ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Jonathan Jeremiah -  Happiness.mp3",
  },




{
    name: "Welcome!",
    artist: "Play Sunny rockradio ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio jingle1.mp3",
  },
 



{  
    name: "Everybody Wants To Rule The World (1985)",
    artist: "Tears For Fears",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Tears for fears - Everybody wants to rule the world.mp3",
  },










{
    name: " Welcome!",
    artist: "Play Sunny Rockradio  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/more music at the weekend.mp3",
  },

 {
    name: "Snippet",
    artist: "Sunny Radio",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  },




{
    name: " Lucky Number (1979)",
    artist: "Lene Lovich  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Lene Lovich - Lucky Number.mp3",
  },




{
    name: "New Gold dream ",
    artist: "Simple Minds ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/New Gold dream - Simple Minds.mp3",
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
    name: " Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


}, 








{
    name: " Too Shy (12inch)",
    artist: "Kajagoogoo",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Kajagoogoo - Too Shy.mp3",
  },


{
     name: "Welcome",
    artist: "Play Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },

{

    name: "Radio Ga GA (12inch)",
    artist: "Queen ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Radio Ga Ga (12'' Extended Version).mp3",
  },




{
    name: "First You Jump",
    artist: "Simple Minds",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jockeys/40 in jingle.mp3",
  },






{
    name: "First You Jump",
    artist: "Simple Minds",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jockeys/40 in jingle12.mp3",
  },


{
    name: " Black Velvet (1989)",
    artist: "Alannah Miles ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio snippet3.mp3",
  },
  

{
    name: "First You Jump",
    artist: "Simple Minds",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jockeys/40 in jingle12.mp3",
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
    name: " A View To A Kill (12 Extended Mix)",
    artist: "Duran Duran",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Duran Duran - A View To A Kill (12 Extended Mix).mp3",
  },

 




 
{
    name: " Meddle (1971)",
    artist: "Pink Floyd",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Pink Floyd - Meddle.mp3",
  },


{
    name: "First You Jump",
    artist: "Simple Minds",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jockeys/40 in jingle12.mp3",
  },






{
    name: " Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


}, 


 {

    name: " New Track",
    artist: "Sunny ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/New track.mp3",
  },




{

    name: " Riptide",
    artist: "Vance Joy ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek02/Vance Joy - Riptide.mp3",
  },

{  
    name: " Alone",
    artist: "Heart  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek02/Heart - Alone.mp3",
  },


{  
    name: "Sirius ",
    artist: "Alan Parsons Project ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Alan Parsons Project -Sirius.mp3",
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
    name: " Peter Gunn",
    artist: "Emmerson Lake & Palmer",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Emmerson Lake & Palmer - Peter Gunn.mp3",
  },
 
 
 {
    name: " Peter Gunn",
    artist: "Emmerson Lake & Palmer",
   image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/Sunny radio snippet.mp3",
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
    name: "First You Jump",
    artist: "Simple Minds",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jockeys/40 in jingle.mp3",
  },


{  
    name: "  Little Lies ",
    artist: "Fleetwood Mac",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek02/Fleetwood Mac -Little Lies.mp3",
  },





{  
    name: " Private Dancer (12inch)",
    artist: "Tina Turner ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Tina Turner - Private Dancer.mp3",
  },




{
    name: " Todays News",
    artist: "Nos Journaal",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/nos journaal 11.mp3",
  


}, 




 {
    name: "Todays News",
    artist: "Nos Journaal",
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




    name: "From The Bottom Of My Soul",
    artist: "Eddie Hazel",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Eddie Hazel - From the bottom of my soul1.mp3",
  },

{




    name: " From The Bottom Of My Soul",
    artist: "Eddie Hazel",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Eddie Hazel - From the bottom of my soul2.mp3",
  },

{




    name: " From The Bottom Of My Soul",
    artist: "Eddie Hazel",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Eddie Hazel - From the bottom of my soul3.mp3",
  },






 
 
{

    name: "Pinball Wizard",
    artist: "The Who ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/The who - Pinball Wizard.mp3",
  },

 

{
     name: "Welcome",
    artist: "Play Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
  },



{
    name: "Learning To Fly",
    artist: "Pink Floyd",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/PinkFloyd - Eagle.mp3",
  },



{
    name: " This Is Not America (12inch)",
    artist: "David Bowie ",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/muziek01/David Bowie - This Is Not America.mp3",
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
    name: " Dollar Days",
    artist: "David Bowie",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/06 Dollar Days.mp3",
  },



{
    name: "First You Jump",
    artist: "Simple Minds",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jockeys/40 in jingle12.mp3",
  },



{
    name: " Whole lotta Rosie",
    artist: "ACDC",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/ACDC - Whole lotta Rosie.mp3",
  },
 









{
    name: " School",
    artist: "Supertramp",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/muziek01/Supertramp - School.mp3",
  },



{
    name: "Todays News",
    artist: "Nos Journaal",
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
    name: "Just For You",
    artist: "Sunny",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/sunny ship/radio dj - just for you.mp3",
  },





  




 
 
{
     name: "Welcome",
    artist: "Play Sunny Danceradio",
    image: "https://i.ibb.co/z6h40FW/saturday-night-fever-1977.png",
    path: "muziek/jingles/Let op.mp3",
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
    name: " Welcome!",
    artist: "Play Sunny Rockradio  ",
    image: "https://i.ibb.co/mSjxv4r/Rock-radio.png",
    path: "muziek/jingles/let's go back.mp3",
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











];










function loadTrack(track_index) {
  // Clear the previous seek timer
  clearInterval(updateTimer);
  resetValues();
 
  // Load a new track
  curr_track.src = track_list[track_index].path;
  curr_track.load();
 
  // Update details of the track
  track_art.style.backgroundImage =
     "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent =
     "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  // Set an interval of 1000 milliseconds
  // for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);
 
  // Move to the next track if the current finishes playing
  // using the 'ended' event
  curr_track.addEventListener("ended", nextTrack);
 
  // Apply a random background color
  random_bg_color();
}
 
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
}
 
function playTrack() {
  // Play the loaded track
  curr_track.play();
  isPlaying = true;
 
  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<img id="media"  src="images/pause button6.png">';
}
 

 

 
function prevTrack() {
  // Go back to the last track if the
  // current one is the first in the track list
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
   
  // Load and play the new track
  loadTrack(track_index);
  playTrack();
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




window.setInterval(function()  {
startTime();
}, 1);





