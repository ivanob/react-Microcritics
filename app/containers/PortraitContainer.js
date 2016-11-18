var React = require('react');
var Movie = require('../components/Movie');
var Rating = require('../components/Rating');
var Critics = require('../components/Critics');

var state ={
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
			critic:"GGRROAAAARRRRRRR"
			}
		]
}

var PortraitContainer = React.createClass({
	render: function(){
		return (
      <div>
        <Movie info={state.movie}/>
        <Rating rating={state.rating}/>
				<Critics critics={state.critics}/>
      </div>
		)
	}
});

module.exports = PortraitContainer;
