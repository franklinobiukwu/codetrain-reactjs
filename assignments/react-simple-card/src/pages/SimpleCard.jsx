import React from "react"
import Title from "../components/Title"
import Description from "../components/Description"
import Image from "../components/Image"

class SimpleCard extends React.Component{
	render(){
		return (
			<div className="flex 
				max-w-xl bg-slate-100 rounded-xl 
				shadow-lg overflow-hidden
				">
				<Image img={this.props.data.img} />
				<div className="px-6 py-4">
					<Title title={this.props.data.title}/>
					<hr className="border-black-100"/>
					<Description description={this.props.data.description}/>
				</div>
			</div>
		)
	}
}

export default SimpleCard
