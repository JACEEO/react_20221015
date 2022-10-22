/* alt+shift+a
    클래스형 컴포넌트
        - 원래 함수형 컴포넌트에서 상태값 관리와 생명주기에 따른 처리가 안돼서 주로 사용했다.   
        - 클래스 문법에 맞춰 작성하는 컴포넌트.
        - React.Component 상속
        - render() jsx 반환
        -this.props로 프로퍼티를 전달

*/

import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
    this.state = {
      count: this.props.initCount,
    };
  }

  onIncrease() {
    console.log(this);
    this.setState({ count: this.state.count + 1 });
  }

  onDecrease() {
    this.setState({ count: this.state.count - 1 });
  }
  componentDidMount() {
    //초기값 설정, API 통신 초기 데이터 받아오기, 라이브러리 연동
    console.log("component : mount");
  }

  componentDidUpdate() {
    // 상태값이나 전달받고 있는 props가 업데이트 되었을 때 실행
    console.log("component : update");
  }
  componentWillUnmount() {
    console.log("component : unmount");
  }

  render() {
    console.log("component : render");
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onIncrease}>+1</button>
        <button onClick={this.onDecrease}>-1</button>
      </>
    );
  }
}

export default ClassCounter;
