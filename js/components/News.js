class News extends React.Component {
	render() {
		let data = this.props.data;
		let newsTemplate = data.map((item, index) => {
			return (
				<div key={item.id}>
					<p className="news_author">{item.author}:</p>
					<p className="news_text">{item.text}:</p>					
				</div>
			);		
		});
		
		return (
			<div className="news">
				{newsTemplate}
				<strong className={data.length > 0 ? '' : 'none'}>Всего новостей:{data.length}</strong>
			</div>
		);		
	}
};

export default News;