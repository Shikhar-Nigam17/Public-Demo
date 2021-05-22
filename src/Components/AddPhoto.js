import React , {Component} from 'react'
//import PropTypes from 'prop-types'

class AddPhoto extends Component{
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const imageLink=event.target.elements.link.value;
        const description=event.target.elements.description.value;
        const post={
            id:Number(new Date()),
            description:description,
            imageLink:imageLink
        }
        if(imageLink && description){
            this.props.onAddPhoto(post)
        }
        

    }
    render(){
        return(
            <div>
            <h1>This is the page</h1>
            <div>
            <form className="form" onSubmit={this.handleSubmit}> 
                <input type="text" placeholder="Link" name="link"/>
                <input type="text" placeholder="description" name="description"/>
                <button className="button">Post</button>
            </form>
            </div>
            </div>
        )
    }
}
export default AddPhoto