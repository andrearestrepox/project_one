

let lyrics = [
    {
        lyric: "I've lost my mind, I've spent the night crying on the floor of my bathroom But you're so unaffected, I really don't get it",
        song: "Good 4 U",
        genre: "POP",
        albumArt: '' ,
        sound: ''
    },
    {
        lyric: "They said, I bet they'll never make itBut just look at us holding on We're still together, still going strong",
        song: "You're Still the One",
        genre: "Country",
        albumArt:'',
        sound: ''
    },
    {
        lyric: "East side to the west side Pushin' phat rides, it's no surprise She got tricks in the stash, stacking up the cash",
        song: "No Diggity",
        genre: "RnB",
        albumArt:'',
        sound: ''
    },
    {
        lyric: "She's got eyes of the bluest skies As if they thought of rain I'd hate to look into those eyes and see an ounce of pain",
        song: "Sweet Child O' Mine",
        genre: "Rock",
        albumArt:'',
        sound: ''
    },
    {
        lyric: "And see, people, they don't understand Your girlfriends, they can't understand Your grandsons, they won't understand On top of this, I ain't ever gonna understand",
        song: "Last Nite",
        genre: "Indie",
        albumArt:'',
        sound: ''
    },
    {
        lyric: "4 de la mañana, Y Andrea Saliendo de La Perla Muchos la critican sin conocerla Calle como un Civic Inteligente como un Tesla",
        song: "Andrea",
        genre: "Latin",
        albumArt:'',
        sound: ''
    },
    {
        lyric: "I don't understand Why do I stress the man? When there's so many bigger things at hand We coulda never had it all We had to hit a wall So this is inevitable withdrawal",
        song: "Tears Dry on Their Own",
        genre: "2000s",
        albumArt:'',
        sound: ''
    },
    {
        lyric: "And what it all comes down to Is that I haven't got it all figured out just yet 'Cause I've got one hand in my pocket And the other one is givin' a peace sign",
        song: "Hand in My Pocket",
        genre: "90s",
        albumArt:'',
        sound: ''
    },
    {
        lyric: "It's the terror of knowing what this world is about Watching some good friends screaming, Let me out - Pray tomorrow gets me higher, higher, high Pressure on people, people on streets",
        song: "Under Pressure",
        genre: "80s",
        albumArt:'',
        sound: ''
    },
    {
        lyric: "People pass me by on my imaginary street Ordinary people it's impossible to meet Holding conversations that are always incomplete Well, I don't know",
        song: "London Town",
        genre: "70s",
        albumArt:'',
        sound: ''
    },
    
]


//timer section//

let timeleft = 25;
let downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementsById("circle").innerHTML = "Times Up!";
  } else {
    document.getElementById("circle").innerHTML = timeleft + " " + "seconds remaining";
  }
  timeleft -= 1;
}, 1000);




