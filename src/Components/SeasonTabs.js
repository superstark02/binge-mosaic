import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { theme as color } from '../Theme/Theme'
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import "../CSS/Pages/Display.css"
import "../CSS/Components/MyList.css"
import getSubCollection from '../Database/getSubCollection';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3} style={{ padding: "10px 0px" }} >
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#fff',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    padding: {
        padding: theme.spacing(3),
    },
    demo2: {
        backgroundColor: color.palette.primary.dark,
    },
}));


export default class SeasonTabs extends React.Component {

    state = {
        value: 0,
        tabs: [],
        s: []
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };

    componentDidMount() {
        var i = 0;

        for (i; i < parseInt(this.props.seasons); i++) {
            this.state.tabs.push(
                <StyledTab label={"Season " + (i + 1)} />
            )
            getSubCollection("Content", this.props.id, "Season-" + (i + 1)).then(r => {
                this.state.s.push(r)
            })
        }

    }

    render() {
        return (
            <div>
                <div>
                    <StyledTabs value={this.state.value} variant="scrollable" scrollButtons="auto" onChange={this.handleChange} aria-label="styled tabs example">
                        {
                            this.state.tabs.map(item => {
                                return (
                                    item
                                )
                            })
                        }
                    </StyledTabs>
                    {
                        this.state.tabs &&
                        this.state.tabs.map((item, index) => {
                            if (index < 9) {
                                return (
                                    <TabPanel value={this.state.value} index={index}>
                                        <div className="ss-container" >
                                            {
                                                this.state.s[index] &&
                                                this.state.s[index].map((i, episode) => {
                                                    if (episode < 9) {
                                                        return (
                                                            <a href={"/play/" + this.props.id + "/Season-" + (index + 1) + "/episode-0" + (episode + 1)} >
                                                                <div style={{
                                                                    background: "url(" + i.image + ")",
                                                                    backgroundSize: "cover",
                                                                    backgroundPosition: "center",
                                                                    height: "30vw",
                                                                    width: "45vw",
                                                                    marginRight: "10px",
                                                                    borderRadius: "2px",
                                                                    boxShadow: "0px 10px 10px  rgba(0, 0, 0, 0.5)",
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    justifyContent: "flex-end"
                                                                }} >
                                                                </div>
                                                                <div style={{ fontSize: "12px", textOverflow: "ellipsis", width: "40vw", whiteSpace: "nowrap", overflow: "hidden", marginTop: "10px" }} >
                                                                    {i.name}
                                                                </div>
                                                                <div style={{ fontSize: "10px", color: "grey", textTransform: "uppercase" }} >
                                                                    Season-{(index + 1)} Episode-{(episode + 1)}
                                                                </div>
                                                                <div style={{ fontSize: "10px", color: "grey", textTransform: "uppercase" }} >
                                                                    {i.date}
                                                                </div>
                                                            </a>
                                                        )
                                                    } else {
                                                        return (
                                                            <a href={"/play/" + this.props.id + "/Season-" + (index + 1) + "/episode-" + (episode + 1)} >
                                                                <div style={{
                                                                    background: "url(" + i.image + ")",
                                                                    backgroundSize: "cover",
                                                                    backgroundPosition: "center",
                                                                    height: "30vw",
                                                                    width: "45vw",
                                                                    marginRight: "10px",
                                                                    borderRadius: "2px",
                                                                    boxShadow: "0px 10px 10px  rgba(0, 0, 0, 0.5)",
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    justifyContent: "flex-end"
                                                                }} >
                                                                </div>
                                                                <div style={{ fontSize: "12px", textOverflow: "ellipsis", width: "40vw", whiteSpace: "nowrap", overflow: "hidden", marginTop: "10px" }} >
                                                                    {i.name}
                                                                </div>
                                                                <div style={{ fontSize: "10px", color: "grey", textTransform: "uppercase" }} >
                                                                    Season-{(index + 1)} Episode-{(episode + 1)}
                                                                </div>
                                                                <div style={{ fontSize: "10px", color: "grey", textTransform: "uppercase" }} >
                                                                    {i.date}
                                                                </div>
                                                            </a>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>
                                    </TabPanel>
                                )
                            } else {

                            }
                        })
                    }
                    <Typography />
                </div>
            </div>
        );
    }
}

