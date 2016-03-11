var CardIcons = React.createClass({
	render: function (){
		return (
			<div>
				<div className="">
					<div className="panel-body">
						<h4 className="media-heading">
						<img src= { this.props.profile_image_url} />
						{ this.props.user_name } </h4>
						<p> { this.props.text}</p>
						<p className ="twittext"> {this.props.created_at} </p>
					</div>
				</div>
			</div>
			)
	}
});

