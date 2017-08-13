import PropTypes from 'prop-types';

class Article extends React.Component {
	constructor(props) {
		super(props);
		this.state = {visible: false};
		this.readmoreClick = this.readmoreClick.bind(this);
	}
	
	readmoreClick = (e) => {
		e.preventDefault();
		this.setState({visible: true});
	};
	render() {
		let author = this.props.data.author,
			text = this.props.data.text,
			bigText = this.props.data.bigText,
			visible = this.state.visible;
		return(
			<div className="article">
				<p className="news_author">{author}</p>
				<p className="news_text">{text}</p>
				<a href="#" onClick={this.readmoreClick} className={`news_readmore ${(visible ? 'none': '')}`}>Readmore</a>
				<p className={`news_bigText ${(visible ? '': 'none')}`}>{bigText}</p>
			</div>
		);
	}
}
//---<Catch error if no data 
Article.propTypes = {
	data: PropTypes.shape({
		author: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		bigText: PropTypes.string.isRequired
	})
}
//--------->
export default Article;