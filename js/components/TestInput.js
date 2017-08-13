class TestInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {myValue: ''};
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
	}
	onChangeHandler = (e) => {
		this.setState({myValue: e.target.value});
	};
	onBtnClickHandler = () => {
		alert(this.state.myValue);
	}
	render() {
		return (
			<div>
				<input 
					className="test-input" 
					value={this.state.myValue}
					onChange={this.onChangeHandler}
					placeholder="insert value" 
				/>
				<button onClick={this.onBtnClickHandler}> ShowAlert</button>
			</div>	
		);
	}
}
export default TestInput;