class Add extends React.Component {
	constructor(props) {
		super(props);
		this.state = {btnIsDisabled: true};
		this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
	}
	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.author).focus();
	}
	onBtnClickHandler = (e) => {
		e.preventDefault();
		let author = ReactDOM.findDOMNode(this.refs.author).value,
			text = ReactDOM.findDOMNode(this.refs.text).value;
		alert(`${author} \n ${text}`);

	}
	onCheckRuleClick = (e) => {
		this.setState({btnIsDisabled: !this.state.btnIsDisabled});
	}
	render() {
		return (
			<form className="add cf">
				<input
					type="text" 
					className="add_author" 
					defaultValue=''
					placeholder="Your name:" 
					ref='author'
				/>
				<textarea
					className="add_text"
					defaultValue=""
					placeholder="News text"
					ref="text"
				></textarea>
				<label className="add_checkrule">
					<input 
						type="checkbox"
						defaultChecked={false}
						ref="checkrule"
						onChange={this.onCheckRuleClick}
					/>
					I'm agree with rules
				</label>	
				<button 
					className="add_btn"
					onClick={this.onBtnClickHandler} 
					ref="alert_button"
					disabled={this.state.btnIsDisabled}>
					ShowAlert
				</button>
			</form>	
		);
	}
}
export default Add;