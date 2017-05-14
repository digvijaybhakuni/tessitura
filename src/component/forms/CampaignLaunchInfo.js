import React from 'react';
import { DatePicker, TextField } from 'material-ui';
import validator from './FormValidation';

export default class CampaignLaunchInfo extends React.Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = { startDate: { dirty: false }, endDate: { dirty: false }, launchDate: { dirty: false }, targetPlanned: { dirty: false }, targetActual: { dirty: false } };
    }

    changeHandlerDate(fn, field, ev, val){
        //console.log("value", val);
        this.props.changeValue(val, fn);
        validator.validate.bind(this, field, validator.require)(val);
    }

    changeHandler(fn, field, ev){
        this.props.changeValue(ev.target.value, fn);
        validator.validate.bind(this, field, validator.require)(ev.target.value);
    }

    render() {
        return (
            <div>
                <DatePicker 
                    hintText="Start date" 
                    onChange={this.changeHandlerDate.bind(this, "cstartdate", this.state.startDate)}
                    value={this.props.value.cstartdate}
                    defaultDate={new Date()}
                    minDate={new Date()}
                    maxDate={this.props.value.cenddate}
                    floatingLabelText="Campaign Start Date" />
                <br/>
                <DatePicker 
                    hintText="End date" 
                    onChange={this.changeHandlerDate.bind(this, "cenddate", this.state.endDate)}
                    value={this.props.value.cenddate}
                    minDate={this.props.value.cstartdate}
                    floatingLabelText="Campaign End Date" />
                <br/>
                <DatePicker 
                    hintText="Launch date" 
                    onChange={this.changeHandlerDate.bind(this, "launchdate", this.state.launchDate)}
                    value={this.props.value.launchdate}
                    minDate={new Date()}
                    floatingLabelText="Launch Date" />
                <h4>Targeted increase in sales (%age)</h4>
                <div className="target-sales">
                    <TextField
                        hintText="Planned"
                        onChange={this.changeHandler.bind(this, "targetPlanned", this.state.targetPlanned)}
                        errorText={validator.errorMsg(this.state.targetPlanned, "Planned is required")}
                        value={this.props.value.targetPlanned}
                        floatingLabelText="Planned" />
                    <TextField
                        hintText="Actual"
                        onChange={this.changeHandler.bind(this, "targetActual", this.state.targetActual)}
                        errorText={validator.errorMsg(this.state.targetActual, "Actual is required")}
                        value={this.props.value.targetActual}
                        floatingLabelText="Actual" />
                </div>
            </div>
        )
    }
}

//To add Theme
//ArtistTrackInfo.muiName = 'IconMenu';


