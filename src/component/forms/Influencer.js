import React from 'react';
import { Checkbox } from 'material-ui';
//import {List, ListItem} from 'material-ui/List';
import validator from './FormValidation';

const socialClickData = [
    {"name": "Facebook Click", "desc" : 0, "inc": 0, "opt": 0, selected: false },
    {"name": "Shazam Click", "desc" : 0, "inc": 0, "opt": 0, selected: false },
    {"name": "Twitter Paid Click", "desc" : 0, "inc": 0, "opt": 0, selected: false },
    {"name": "Twitter URL Click", "desc" : 0, "inc": 0, "opt": 0, selected: false }
];

const socialImpression = [
    {"name": "Facebook Imps", "desc" : 0, "inc": 0, "opt": 0, selected: false },
    {"name": "Instagram post Imps", "desc" : 0, "inc": 0, "opt": 0, selected: false },
    {"name": "Shazam Imps", "desc" : 0, "inc": 0, "opt": 0, selected: false },
    {"name": "Twitter paid Imps", "desc" : 0, "inc": 0, "opt": 0, selected: false },
    {"name": "Youtube paid Imps", "desc" : 0, "inc": 0, "opt": 0, selected: false }
];

const socialView = [
    {"name": "Facebook Video", "desc" : 0, "inc": 0, "opt": 0, selected: false },
    {"name": "Instagram Video", "desc" : 0, "inc": 0, "opt": 0, selected: false },
    {"name": "Youtube Paid Views", "desc" : 0, "inc": 0, "opt": 0, selected: false },
    {"name": "Twitter total video View", "desc" : 0, "inc": 0, "opt": 0, selected: false }
];

const otherArea = [
    {"name": "Digital Click", "desc" : 0, "inc": 0, "opt": 0, selected: false },
    {"name": "Digital Impressions", "desc" : 0, "inc": 0, "opt": 0, selected: false },
    {"name": "TV Impacts", "desc" : 0, "inc": 0, "opt": 0, selected: false },
    {"name": "TV reach", "desc" : 0, "inc": 0, "opt": 0, selected: false }
];

export default class Influencer extends React.Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = { 
            socialClickData: socialClickData,
            socialImpression: socialImpression,
            socialView: socialView,
            otherArea: otherArea
        };
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

    cellChange(fn, i, e, ev){
        const state = this.state;
        const data = state[e];
        // console.log("data", data);
        // console.log("data[i]", data[i]);
        // console.log("data[i][fn]", data[i][fn]);
        console.log(ev.target);
        const intVal = parseInt(ev.target.value);
        if(ev.target.max < intVal){
            data[i][fn] = ev.target.max;
        }else if (ev.target.min > intVal){
            data[i][fn] = ev.target.min;
        }else {
            data[i][fn] = intVal;
        }   
        // console.log(data);
        // console.log(state);
        this.setState(state);
    }

    changeCheckbox(i, e, ev, isChecked){
        const state = this.state;
        const data = state[e];
        data[i].selected = isChecked;
        //console.log(data[i]);
        this.setState(state);
    }

    renderRow(data, section){
        return (
            data.map((rw, i) => (
                <tr key={i}> 
                    <td>{rw.name}</td>
                    <td><input disabled={!rw.selected} type="number" value={rw.desc} onChange={this.cellChange.bind(this, "desc", i, section)} max={100} min={-100}/></td>
                    <td><input disabled={!rw.selected} type="number" value={rw.inc} onChange={this.cellChange.bind(this, "inc", i, section)} max={100} min={-100}/></td>
                    <td><input disabled={!rw.selected} type="number" value={rw.opt} onChange={this.cellChange.bind(this, "opt", i, section)} max={100} min={-100}/></td>
                    <td><Checkbox value={rw.selected} onCheck={this.changeCheckbox.bind(this, i, section)}/></td>
                </tr>
            ))
        )
    }
        



    render() {
        const {socialClickData, socialImpression, socialView, otherArea} = this.state;
        console.log("socialClickData", socialClickData);
        return (
            <div>
                <table className="table-influencer">
                    <thead>
                        <tr>
                            <th>Social Clicks</th>
                            <th>Allowable decrease</th>
                            <th>Allowable increase</th>
                            <th>Optimal %age change</th>
                            <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*<tr className="subheader">
                            <td colSpan="5">Social Clicks</td>
                        </tr>*/}
                        {this.renderRow(socialClickData, "socialClickData")}
                        <tr className="subheader">
                            <td colSpan="5">Social impression</td>
                        </tr>
                        {this.renderRow(socialImpression, "socialImpression")}
                        <tr className="subheader">
                            <td colSpan="5">Social Views</td>
                        </tr>
                        {this.renderRow(socialView, "socialView")}
                        <tr className="subheader">
                            <td colSpan="5">Other Area</td>
                        </tr>
                        {this.renderRow(otherArea, "otherArea")}
                    </tbody>
                </table>
            </div>
        )
    }
}