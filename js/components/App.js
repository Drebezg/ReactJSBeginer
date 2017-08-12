import News from './News';
import Comments from './Comments';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				Component App! I can show news.
				<News />
				<Comments />
			</div>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

export default App;