import React from 'react';
import ReactDOM from 'react-dom';
import content from './data/content';

import StoryList from './StoryList';
import NavBar from './NavBar';

class DesignerNews extends React.Component{
	constructor(props){
		super(props);
		this.increaseUpVote=this.increaseUpVote.bind(this);
		this.notStarredStory=this.notStarredStory.bind(this);
		this.showStarredStories=this.showStarredStories.bind(this);
		this.showAllStories=this.showAllStories.bind(this);
		this.state={
			content:content,
			notStarred:[]			
		}
	}
	increaseUpVote(id){
		var content=this.state.content.slice(0).map(story => Object.assign({},story));

		var story=content.find(story => story.id===id);

		story.votes=story.votes+1;
		this.setState({
			content
		});

	}
	showAllStories(){
		var content=this.state.content.slice(0).map(story => Object.assign({},story));

		this.setState({
			content,
			notStarred:[]

		})
		console.log(content)
	}
	notStarredStory(id){
	    var content = this.state.content.slice(0).map(story => Object.assign({}, story));
	    var story = content.find(story => story.id === id);
	    if(story.status=== false) {
	      story.status=true;
	    }
	    else {
	      story.status=false;
	    }
	    this.setState({
	      content
	    });
  	}

	
	showStarredStories(){
		
	var content = this.state.content.slice(0).map(story => Object.assign({}, story));
    var notStarred = this.state.notStarred.slice(0).map(story => Object.assign({}, story));
    content.forEach(item => {
      if(item.status===false) {
        notStarred.push(item.id);
      }
    })
    console.log(notStarred);
    this.setState({
      notStarred
    });
  }

	
	
	render(){
		return(
			<div className="container">
				<div className="row">
			 		 <div className="col-md-12">
							<h1>{this.props.headerText}</h1> 	
					  </div>
				</div>
				<div className="row">
					<NavBar 
						showStarredStories={this.showStarredStories}
						showAllStories={this.showAllStories}
					/>
				</div>
				<div className="row">
					<StoryList
						 content={this.state.content} 
						 increaseUpVote={this.increaseUpVote}
						 notStarredStory={this.notStarredStory}
						 notStarred={this.state.notStarred}
					/>
				</div>
			</div>
		);
	}
}
export default DesignerNews;