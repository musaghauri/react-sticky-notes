import React from 'react';
import { NoteWrapper, Note } from './styles';
export default class StickyNote extends React.Component {


  render() {
    const option = {
      title: "Title",
      content: "Content content",
    }
    return (
      <NoteWrapper>
        <Note backgroundColor="black" color="#ffffff" rotate={2}>
          <h4 onClick={() => this.props.handleClick(option)}>{option.title.substring(0,11)||""}</h4>
          <p>{option.content.substring(0, 41)||""}</p>
          <span className="buttons">
            <a onClick={() => this.props.deleteOption(option.toJS(), index)} className="pull-right"><i className="fa fa-trash-o"></i></a>
            <a onClick={() => this.props.editOption(option, index)} style={{ marginRight: "1vw" }} className="pull-right"><i className="fa fa-pencil"></i></a>
          </span>
        </Note>
      </NoteWrapper>
    )
  }
}
