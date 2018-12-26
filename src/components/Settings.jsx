﻿import React from 'react'

export default class Settings extends React.Component {
	toggleNoStops = (e) => {
		this.props.toggleNoStopsAllowed()
	}

	toggleOneStop = (e) => {
		this.props.toggleOneStopAllowed()
	}

	toggleTwoStops = (e) => {
		this.props.toggleTwoStopsAllowed()
	}

	toggleThreeStops = (e) => {
		this.props.toggleThreeStopsAllowed()
	}

	render() {
		const { stopsChoiceState } = this.props

		return <div className='card m-3 h-100'>
			<div className='card-body'>
				<h5 className='card-title text-left'>Валюта</h5>
				<div className='btn-group' role='group' aria-label='Choose currency'>
					<button type='button' className='btn btn-secondary'>RUB</button>
					<button type='button' className='btn btn-secondary'>USD</button>
					<button type='button' className='btn btn-secondary'>EUR</button>
				</div>
				<div className='m-4' />
				<h5 className='card-title text-left'>Количество пересадок</h5>
				<div className='checkbox text-left'>
					<label><input type='checkbox' checked={stopsChoiceState.noStopsAllowed} onChange={this.toggleNoStops} />Все</label>
				</div>
				<div className='checkbox text-left'>
					<label><input type='checkbox' checked={stopsChoiceState.oneStopAllowed} onChange={this.toggleOneStop} />1 пересадка</label>
				</div>
				<div className='checkbox text-left'>
					<label><input type='checkbox' checked={stopsChoiceState.twoStopsAllowed} onChange={this.toggleTwoStops} />2 пересадки</label>
				</div>
				<div className='checkbox text-left'>
					<label><input type='checkbox' checked={stopsChoiceState.threeStopsAllowed} onChange={this.toggleThreeStops} />3 пересадки</label>
				</div>
			</div>
		</div>
	}
}