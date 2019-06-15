import React from 'react';
import {
    Step,
    Stepper,
    StepButton,
    StepContent,
} from 'material-ui/Stepper';
import { RaisedButton, FlatButton } from 'material-ui';

import ArtistTrackInfo from './forms/ArtistTrackInfo';
import CampaignLaunchInfo from './forms/CampaignLaunchInfo';
import Influencer from './forms/Influencer';

class StepperForm extends React.Component {

    state = {
        stepIndex: 0,
        value: {}
    };


    handleNext = () => {
        const { stepIndex } = this.state;
        if (stepIndex < 2) {
            this.setState({ stepIndex: stepIndex + 1 });
        }

        console.log("value", this.props.value);

    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    validations = (ev) => {
        console.log("ev", ev);
        console.log("ev.errorText", ev.target.errorText);
        return (ev.target.value) ? false : true;
    };


    changeStateVal = (val, fn) => {
        let value = this.state.value;
        value[fn] = val;
        this.setState({ value });
    }


    renderStepActions(step) {
        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label={step === 2 ? "Finish" : "Next"}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onTouchTap={this.handleNext}
                    style={{ marginRight: 12 }}
                />
                {step > 0 && (
                    <FlatButton
                        label="Back"
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onTouchTap={this.handlePrev}
                    />
                )}
            </div>
        );
    }

    render() {
        const { stepIndex } = this.state;
        const { value } = this.state;

        return (
            <div>
                <Stepper
                    activeStep={stepIndex}
                    linear={false}
                    orientation="vertical">
                    <Step>
                        <StepButton onTouchTap={() => this.setState({ stepIndex: 0 })}>
                            Artist And Track Info
            </StepButton>
                        <StepContent>
                            <ArtistTrackInfo value={value} changeValue={this.changeStateVal.bind(this)} />
                            {this.renderStepActions(0)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepButton onTouchTap={() => this.setState({ stepIndex: 1 })}>
                            Campaign And Launch Info
            </StepButton>
                        <StepContent>
                            <CampaignLaunchInfo value={value} changeValue={this.changeStateVal.bind(this)} />
                            {this.renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepButton onTouchTap={() => this.setState({ stepIndex: 2 })}>
                            Controllable Influencer
            </StepButton>
                        <StepContent>
                            <Influencer value={value} changeValue={this.changeStateVal.bind(this)} />
                            {this.renderStepActions(2)}
                        </StepContent>
                    </Step>
                </Stepper>
            </div>
        );
    }
}

export default StepperForm;