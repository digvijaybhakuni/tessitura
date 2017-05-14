import React from 'react';
import { TextField } from 'material-ui';
import validator from './FormValidation';

class ArtistTrackInfo extends React.Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = { nameError: { dirty: false }, nameTrack: { dirty: false } };
    }

    validate(e, ev) {
        const res = this.props.validations(ev);
        const err = {};
        err[e] = { dirty: true, invalid: res };
        this.setState(err);
    }

    changeHandler(fn, field, ev){
        this.props.changeValue(ev.target.value, fn);
        validator.validate.bind(this, field, validator.require)(ev.target.value);
    }

    render() {
        return (
            <div>
                <TextField
                    hintText="Name"
                    onChange={this.changeHandler.bind(this, "name", this.state.nameError)}
                    errorText={validator.errorMsg(this.state.nameError, "Artist Name is required")}
                    value={this.props.value.name}
                    floatingLabelText="Artist Name" />
                <br />
                <TextField
                    hintText="Track"
                    onChange={this.changeHandler.bind(this, "track", this.state.nameTrack)}
                    errorText={validator.errorMsg(this.state.nameTrack, "Track is required")}
                    value={this.props.value.track}
                    floatingLabelText="Track Name" />
            </div>
        )
    }
}

//To add Theme
//ArtistTrackInfo.muiName = 'IconMenu';

export default ArtistTrackInfo;
