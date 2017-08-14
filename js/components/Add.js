class Add extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			agreeNotChecked: true,
			authorIsEmpty: true,
			textIsEmpty: true
		};
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
		this.setState({agreeNotChecked: !this.state.agreeNotChecked});
	}
	onAuthorChange = (e) => {
		if(e.target.value.trim().length > 0) {
			this.setState({authorIsEmpty: false});
		} else {
			this.setState({authorIsEmpty: true});
		}
	}
	onTextChange = (e) => {
		if(e.target.value.trim().length > 0) {
			this.setState({textIsEmpty: false});
		} else {
			this.setState({textIsEmpty: true});
		}
	}
	render() {
		let agreeNotChecked = this.state.agreeNotChecked,
			authorIsEmpty = this.state.authorIsEmpty,
			textIsEmpty = this.state.textIsEmpty;
		return (
			<form className="add cf">
				<input
					type="text" 
					className="add_author" 
					defaultValue=''
					placeholder="Your name:" 
					ref='author'
					onChange={this.onAuthorChange}
				/>
				<textarea
					className="add_text"
					defaultValue=""
					placeholder="News text"
					ref="text"
					onChange={this.onTextChange}
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
					disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}>
					ShowAlert
				</button>
			</form>	
		);
	}
}
export default Add;