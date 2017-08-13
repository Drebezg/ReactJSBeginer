class TestInput extends React.Component {
	constructor(props) {
		super(props);
		this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
	}
	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.myTestInput).focus();
	}
	onBtnClickHandler = () => {
		console.log(this.refs);
		alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
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