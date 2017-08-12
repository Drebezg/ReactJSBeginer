import Article from './Article';

class News extends React.Component {
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
				<strong className={'news_count ' + (data.length > 0 ? '' : 'none') }>Total news:{data.length}</strong>
			</div>
		);		
	}
};

export default News;