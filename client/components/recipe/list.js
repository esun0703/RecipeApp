// var React = require("react");
import React from "react";
import Recipe from "./single"


export default class RecipeList extends React.Component {
	constructor(){
        super();

		this.state={
		//el is each element in the array. 
		// recipes: Array(12).fill(0).map((el, id)=>({name: id, id}))
			recipes:[{
				Recipe:"Thai Curry Chicken Salad Lettuce Wraps",
				Image: "https://lh3.googleusercontent.com/V2FNoz5hQYBJV_zZFajDCQ6ghUGSJj1Dvdfd-NVEmfxJ566b2IAErQLKHvmVAuG1KXytiICuUpJoCNC2YHlyEHE=s300-c-e365",
				Link: "http://www.yummly.co/#recipe/Thai-Curry-Chicken-Salad-Lettuce-Wraps-2057464"
			},
			{
				Recipe:"BLT Lettuce Wraps",
				Image: "https://lh5.ggpht.com/OXCoPn2PFZHpYFwI9CTQEruCDAKEdwvm34pLToYgnAwbQ0dhh_L82-0sZuSWqJGcdVuC0O36nfw65GK-PXGrmb0=s300-c-e365",
				Link: "http://www.yummly.co/#recipe/Blt-lettuce-wraps-352347"

			},
			{
				Recipe:"Lettuce Water",
				Image: "https://lh3.googleusercontent.com/Xe_O-vCnYyZjmWxe7gDvuvkC7b7lhvrA22zW2v0eFf7P3hKncZoIUMxC7kHsuNRd_Pievz9Slx-j-LYR201Mxg=s300-c-e365",
				Link: "http://www.yummly.co/#recipe/Lettuce-Water-1988494"

			},
			{
				Recipe:"Korean Beef Lettuce Wraps",
				Image: "https://lh4.ggpht.com/P8GHjGvQzJCNneh4jUy9Qniz_MUMQDNVlkbWOfSKRxVfbyVba_m3a35jGJMK6r48Uh_l_wSH73Bzc1Z2CFJXqA=s300-c-e365",
				Link: "http://www.yummly.co/#recipe/Korean-Beef-Lettuce-Wraps-1029951"

			},
			{
				Recipe:"Cauliflower Lettuce Salad",
				Image: "https://lh3.googleusercontent.com/AMcPmiuEWHtGeFI70HGw72MdHx_hKMd9Ol-l6Y5d8p1LBZArLO_2O1CRdvHEcTe0hg9sJrS_HxHTB2d2aINnFSY=s300-c-e365",
				Link: "http://www.yummly.co/#recipe/Cauliflower-Lettuce-Salad-1416423"

			},
			{
				Recipe:"Lettuce Wraps",
				Image: "https://lh3.googleusercontent.com/vY7u745kKx0HjR1Ncbrh1WH5XQYw_FKZM-4_R4KiVmeeKQx2MmlM3iiqUcVc2osQmT8dWS_TAhAm4Bq-bHly=s300-c-e365",
				Link: "http://www.yummly.co/#recipe/Lettuce-Wraps-1789553"

			},
			{
				Recipe:"Zesty Tuna Lettuce Wraps",
				Image: "https://lh3.googleusercontent.com/yFuaxmRBQ4vtU25YV94pIQeb7Fwm8vbReyFyrSIiZtvtdF25Nuqq1hlxS-JuLTEz6mcKct_eBuo-43tx-HrC-Dc=s300-c-e365",
				Link: "http://www.yummly.co/#recipe/Zesty-Tuna-Lettuce-Wraps-2056704"

			},
			{
				Recipe:"P.F. Chang's Chicken Lettuce Wraps",
				Image: "https://lh3.googleusercontent.com/LL7DLVJHv3spYVB5sCYYZ1HIA2aSPA-yC_jLZyHtMcZLRQCRAO9J-YecKYnMOxfzoNm-8wHmc72COocR-RvBdA=s300-c-e365",
				Link: "http://www.yummly.co/#recipe/P_F_-Chang_s-Chicken-Lettuce-Wraps-1685908"

			},
			{
				Recipe:"Chicken Cashew Lettuce Wraps",
				Image: "https://lh6.ggpht.com/ITMsGfDYKo_cY4hjsC9CCxCCJekAf-znuxlMuLaj8PBYbqHa4rLnqcyZj2mUFQSzJ4JJXBK6knsDBmyoU27icxQ=s300-c-e365",
				Link: "http://www.yummly.co/#recipe/Chicken-Cashew-Lettuce-Wraps-925176"

			},
			{
				Recipe:"Bacon Lettuce Tomato (BLT) Spring Roll",
				Image: "https://lh3.googleusercontent.com/Cs-WbYsAWQz-ozBwCGKBjiVj1CTnixSpoOkVKKPALvq6qQk7cG2FyGGqiFHyOrgtIdYfa17lEbTa2eXhyE7RnA=s300-c-e365",
				Link: "http://www.yummly.co/#recipe/Bacon-Lettuce-Tomato-_BLT_-Spring-Roll-747104"

			},
			{
				Recipe:"Shrimp Lettuce Wraps",
				Image: "https://lh3.googleusercontent.com/WQFMo50BkaZSI11-hyqLYFd0Z5__6pzVY8YtzvOUnNaUIOdQzZKDUiGJx_5RpVmsFo0cvNVLQOdchqj16dfk=s300-c-e365",
				Link: "http://www.yummly.co/page/fitfundelishcom"

			},
			{
				Recipe:"Taco Lettuce Wraps",
				Image: "https://lh3.googleusercontent.com/h7GlXfX7CSaL3Nvo1QeGcX94BgW1feDM7SbWUMLVnW-PWXgO8rkIUZnTDXtKo0nzr8lu6iF3DIor8jOwQGcJEwc=s300-c-e365",
				Link: "http://www.yummly.co/#recipe/Taco-Lettuce-Wraps-1212004"

			},
			]
		};
	}
	render(){
		return(
			<div  id="recipeDisplay">
				{this.state.recipes.map((r, idx)=> 
				<div className="col-md-4 recipeMd4" key={idx}>
					<Recipe recipeName={r.Recipe} recipeImage={r.Image} recipeLink={r.Link}/>
				</div>)}
			</div>
		)
	}
}