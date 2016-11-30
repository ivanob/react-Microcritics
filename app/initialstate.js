module.exports = function(){
    return {
        movies: [
            {
          		movie:{
          			image: "",
          			title: "Jurassic Park",
          			director: "Steven Spielberg",
          			year:1995
          		},
          		rating:"happy",
          		critics:[
          			{author:"user1",
          			critic:"Dinosaurs are like chicken"
          			},
          			{author:"user2",
          			critic:""
          			}
              ]
            }
        ],
        battlefield: {
            doing: {batman:C.WAITING,superman:C.WAITING,spiderman:C.WAITING,"he-man":C.WAITING},
            standing: 4,
            log: ["Ready.... fight!"]
        }
    };
};
