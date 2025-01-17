import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import ToggleSettings from "../components/ToggleSettings";
import Timer from "../components/Timer";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const controlpanel = () => {
    return {
        marginRight: '10px',
        marginTop: '25px',
        marginBottom: '10px',
        opacity: 1
    };
};

const buttonPanel = () => {
    return {
        display: 'inline-flex',
        width: '200px',
    }
};

const valuetext = (value) => {
    return value + 'px';
};


class DisplayView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                        copyButtonText: "Copy Puzzle Link"
                     };
        this.state.uri = this.props.isDailyChallenge === 'Yes' ? 'dailychallenge' : this.props.uri;
    }

    isCreateMode = (createMode) => {
        if (createMode === 'Yes') {
            return (
                <div>
                    <Button color="secondary" variant={"outlined"} fullWidth={true} onClick={this.handleCreateBoardClick}>Modify Board</Button>
                    <FormControlLabel
                        value="end"
                        control={<Switch color="primary" checked={this.props.buildMode} onChange={this.props.toggleBuildMode}/>}
                        label="Build Mode"
                            />
                </div>
                );
        }
        else {
            return null
        }
    };

    handleCreateBoardClick = event => {
        return this.props.createBoardPressed('Create Board');
    };

    copyToClipboard = () => {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = 'http://' + window.location.host + '/play/' + this.state.uri;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        this.props.copiedClipboard();
        var thisThing = this;
        thisThing.setState({copyButtonText: "Link Copied"});
        setTimeout(function () {
            thisThing.setState({copyButtonText: "Copy Puzzle Link"})
        }, 1500)
    };

    handleDimensionChange = (event,value) => {
        document.getElementsByClassName("MuiSlider-thumb")[0].blur();
        var dimension = parseInt(value);
        if (dimension.toString() === "NaN") {
            dimension = 10;
        } else if (dimension > 16) {
            dimension = 16;
        } else if (dimension < 2) {
            dimension = 2;
        }
        this.props.DimensionChanged(dimension);
    };

    showPuzzleLink = () => {
        if (this.props.createMode === 'Yes' || this.props.isPuzzleRush === 'Yes' || this.props.isLesson === 'Yes' || this.props.isDailyChallengeAnswers === 'Yes' || this.props.isDailyChallenge === 'Yes' || this.props.isWeeklyChallenge === 'Yes') {
            return null;
        }
        else {
                return(
                     <div style={{paddingBottom: '10px'}}>
                         <Button fullWidth={true} variant="contained" color="secondary" style={{marginRight: "10px"}}
                                 onClick={this.copyToClipboard}>{this.state.copyButtonText}</Button>
                     </div>
                    )
        }
    }

     render() {
         return (
             <div style={controlpanel()}>
                {this.showPuzzleLink()}
                 <Divider />
                 <Typography
                     color="textSecondary"
                     display="block"
                     variant="caption"
                     style={{paddingBottom: '10px'}}
                 >
                     Board Actions
                 </Typography>
                 <ButtonGroup fullWidth={true} color="secondary" aria-label="contained primary button group">
                     <Button onClick={this.props.resetPuzzle}>Reset</Button>
                     <Button onClick={this.props.undoMove}>Undo</Button>
                 </ButtonGroup>
                 {this.isCreateMode(this.props.createMode)}
                 <Divider />
                 <ToggleSettings showColoredLineDirections={this.props.showColoredLineDirections} onClick={this.props.toggleLineIndicators}/>
                 <div style={buttonPanel()}>
                     <Typography id="discrete-slider-small-steps"
                                 color="textSecondary"
                                 display="inline"
                                 gutterBottom>
                         Size Of Board
                     </Typography>
                     <Slider
                         onChangeCommitted={this.handleDimensionChange}
                         getAriaValueText={valuetext}
                         aria-labelledby="discrete-slider-small-steps"
                         step={1}
                         marks
                         min={2}
                         max={16}
                         defaultValue={this.props.squareSizeValue}
                         valueLabelDisplay="auto"
                         id="sliderelement"
                     />
                 </div>
                 <Divider/>
             </div>
         )
     }
    }

export default DisplayView