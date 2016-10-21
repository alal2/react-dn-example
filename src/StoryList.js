import React from 'react';
import Stories from './Stories';

class StoryList extends React.Component{
	constructor(props){
		super(props);
		this.checkIfChecked=this.checkIfChecked.bind(this);
	}
	checkIfChecked(id){
		var lengthOfNotStarred=this.props.notStarred.length;
		while(lengthOfNotStarred>=0){
			if(this.props.notStarred[lengthOfNotStarred]===id){
				return false;
			}
			lengthOfNotStarred--;
		}
		return true;
	}
	render(){
		var story=this.props.content.sort((a, b)=>b.votes-a.votes).filter(story => this.checkIfChecked(story.id))
		.map( story=> {
	      return (
	        <Stories
	          key={story.id}
	          increaseUpVote={this.props.increaseUpVote}
	          notStarredStory={this.props.notStarredStory}
	          {...story}
	        />
	      );
     });
		return(
			<div className="col-md-12">
				{story}
			</div>

		);
	}
}
export default StoryList;