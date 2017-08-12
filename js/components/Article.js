import PropTypes from 'prop-types';

class Article extends React.Component {
	render() {
		let author = this.props.data.author,
			text = this.props.data.text;

		return(
			<div className="article">
				<p className="news_author">{author}</p>
				<p className="news_text">{text}</p>
			</div>
		);
	}
}
//---<Catch error if no data 
Article.propTypes = {
	data: PropTypes.shape({
		author: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired
	})
}
//--------->
export default Article;