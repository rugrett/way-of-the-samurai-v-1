import React from 'react';

const DialogMessage = (props) => {
  let newMessage = React.createRef();

  const addMessage = () => {
      let text = newMessage.current.value;
      alert(text);
    },
    addNewMessage = () => {

    }

    let
  messageArray;
  if (typeof props.message === 'object') {
    messageArray = props.message.map(m => {
      return (
        <div className={`dialogs__${m.side}`}>
          <span className="dialogs__user-name">{m.userName}</span>
          <span>{m.message}</span>
        </div>
      )
    })
  }
  return (
    <div className="dialogs__message">
      {messageArray}
      <div>
        <textarea ref={newMessage} value={props}></textarea>
        <div>
          <button onClick={addMessage}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  )
}

export default DialogMessage;