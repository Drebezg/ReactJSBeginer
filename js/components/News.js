import Article from './Article';
import PropTypes from 'prop-types';

class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {counter: 0};
	}
	
	render() {
		let data = this.props.data;
		let newsTemplate;

		if(data.length > 0) {
			newsTemplate = data.map((item, index) => {
				return (
					<div key={item.id}>
						<Article data={item} />					
					</div>
				);		
			});
		} else {
			newsTemplate = <p>Unfortunately no new required.</p>
		}
		
		return (
			<div className="news">
				{newsTemplate}
				<strong 
					className={'news_count ' + (data.length > 0 ? '' : 'none') }>
					Total news:{data.length}
				</strong>
			</div>
		);		
	}
};
//------<Add beter error message
News.propTypes = {
	data: PropTypes.any.isRequired
};
//-------->
export default News;