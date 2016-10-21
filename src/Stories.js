import React from 'react';
import ReactDOM from 'react-dom';

class Stories extends React.Component{
	constructor(props){
		super(props);
		this.increaseVote=this.increaseVote.bind(this);
		this.starStory=this.starStory.bind(this);
	}
	increaseVote(){
		this.props.increaseUpVote(this.props.id);
	}
	starStory(){
	
		this.props.notStarredStory(this.props.id);
	}
	render(){
		return(
			<div className="stories">
				<ul id={this.props.id}>
					<li>
						<button className="glyphicon glyphicon-chevron-up" onClick={this.increaseVote}></button>
						<span>{this.props.votes}</span>
					</li>
					<li className="story">{this.props.id}:{this.props.story}</li>
					<li ><input type="checkbox"  name="starred" className="glyphicon glyphicon-star-empty" onChange={this.starStory}/></li>
				</ul>
			</div>

		);
	}

}
export default Stories;