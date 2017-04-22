class FoodComponent extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			// const {name,expiration}=this.props??
			<div class="row">
				<div class="foods">
					<p>Food Example<span class="expirationDate">#Weeks #Days</span></p>
				</div>
			</div>
		)
	}
}