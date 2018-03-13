import React,{Component} from 'react';

class ListItem extends Component {
  constructor(props){
    super(props);
    this.props.onLoadRequestItem(this.props.match.params.id);
    console.log(this.props);
  }

  render(){

    return(<div  style={{marginLeft:20}}>
      <h3 style={{width:500}}>{this.props.item.title}</h3>
      <p>{this.props.item.body}</p>
      <p>Post Id: {this.props.item.id}</p>
    </div>);
}
}
export default ListItem;
