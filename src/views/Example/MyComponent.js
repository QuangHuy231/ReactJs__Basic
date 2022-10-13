import React from "react";

class MyComponent extends React.Component {
  state = {
    //state la 1 object
    //view render lại mà không cần load lại
    lastName: "Quang Huy",
    firstName: "Nguyen",
  };

  handleOnChangeName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  render() {
    return (
      //chỉ return ra 1 khối
      //class -> className
      // React.Fragment -> return 2 hay nhiều khối không có bọc ngoài
      // <React.Fragment> or <>

      <>
        <div>
          <input
            value={this.state.lastName}
            type="text"
            onChange={(event) => {
              this.handleOnChangeName(event);
            }}
          ></input>
          Hello World!! {this.state.firstName + " " + this.state.lastName}
        </div>

        <div>{this.state.lastName}</div>
      </>
    );
  }
}

export default MyComponent;
