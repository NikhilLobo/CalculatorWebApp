import React from 'react';
import firebase from '../services/firebase';
import Detail from './DetailComponent';
const rootRef=firebase.database().ref("issues/");
const rootRefR=firebase.database().ref("issues/").limitToLast(10);

class User extends React.Component{
  constructor(props)
  {
      super(props);
      this.state={
          expression: " ",
          chats: []
      };

      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
  }
  componentDidMount() {
      rootRefR.on("value",
        (snapshot) => {
            let chats = [];
          snapshot.forEach((snap) => {
              chats.push(snap.val());
          });
          this.setState({ chats });

            console.log(snapshot.val());
         },
         (error) => {
            console.log("Error: " + error.code);
         }

       );
  }
  handleChange(event) {
    console.log( event.target.value);
    this.setState({
      expression: event.target.value
    });

  }


handleSubmit(event) {
  event.preventDefault();

    if(this.state.expression!=' ')
    {
            var res=this.state.expression.concat(" = ");
            try {
                  rootRef.push({
                    expression:res.concat(eval(this.state.expression))
                  })

                  this.setState({
                    expression: ' '
                  });
                } catch (error) {
                  alert("Input is invlid");
                    this.setState({
                      expression: ' '
                    });
                }
    }
    else {
      alert("Empty Value recieved");
    }
}
  render(){
      return (
                <div className="container">
                    <div  className="App">
                          <Detail chats={this.state.chats}/>
                          <form onSubmit={this.handleSubmit}>
                              <h3><b>Enter a valid expression: <input type="text" id="t1" onChange={this.handleChange} value={this.state.expression}/></b></h3>
                              <input type="submit" value="submit"/>
                          </form>
                   </div>
                </div>
          );
    }
}

export default User;
