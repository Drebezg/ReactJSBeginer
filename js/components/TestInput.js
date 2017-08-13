class TestInput extends React.Component {
	constructor(props) {
		super(props);
		//this.state = {myValue: ''};
		//this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
	}
	/*onChangeHandler = (e) => {
		this.setState({myValue: e.target.value});
	};*/
	onBtnClickHandler = () => {
		alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
		console.log(this.refs);
	}
	render() {
		return (
			<div>
				<input 
					className="test-input" 
					defaultValue=''
					placeholder="insert value" 
					ref='myTestInput'
				/>
				<button onClick={this.onBtnClickHandler} ref="alert_button"> ShowAlert</button>
			</div>	
		);
	}
}
export default TestInput;