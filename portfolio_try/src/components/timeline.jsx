import React, { Component } from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';

const VALUES = ['11-09-2009', '03-23-2011'];

const TIMESTAMPS = [
    {
        data: "09-26-1999",
        status: "status",
        header: "My Birthday",
        text: "Leo is born."
    },
    {
        data: "01-31-2001",
        status: "status",
        header: "Arun's Birthday",
        text: "The great Ramasamy is born."
    },
    {
        data: "07-01-2016",
        status: "status",
        header: "University of Vienna",
        text: "I am a part of an intern program at the University of Vienna. My job is to, among a group of other secondary school students, assist a professor with his daily tasks and conduct research on a mathematical topic of preference."
    },
    {
        data: "06-01-2018",
        status: "status",
        header: "Graduation",
        text: "I graduate with distinction from the Sigmund-Freud-Gymnasium in Vienna, Austria."
    },
    {
        data: "09-01-2018",
        status: "status",
        header: "Octapharma Inc.",
        text: "I participate in my second internship at Octapharma Inc, a globally acting pharmaceutical producer. I am part of the team Operation Support."
    },
    {
        data: "09-01-2019",
        status: "status",
        header: "University of Manchester",
        text: "I enroll at the University of Manchester for a B.Sc. (Hons) Computer Science Degree."
    }
];

class TimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curIdx: 0,
            prevIdx: -1
        };
    }

    render() {
        const {curIdx} = this.state;
        const curTxt = TIMESTAMPS[curIdx].text;
        const curHeader = TIMESTAMPS[curIdx].header;
        return (
            <div id="timeline-wrapper">
                <section className="colorlib-about" id="timeline">
                <div className="colorlib-narrow-content">
                <span className="heading-meta">Timeline</span>
                <div
                    style={{
                        width: "90%",
                        height: "100px",
                        margin: "0 auto",
                        marginTop: "30px",
                        fontSize: '15px',
                    }}>
                        <HorizontalTimeline
                        linePadding={200}
                        styles={{
                            background: "#ffffff",
                            foreground: '#c2c2c2',
                            outline: "#dbdbdb"
                        }}
                        index={this.state.curIdx}
                        indexClick={index => {
                            const curIdx = this.state.curIdx;
                            this.setState({ curIdx: index, prevIdx: curIdx });
                        }}
                        values={TIMESTAMPS.map(x => x.data)} /*How does mapping work*/
                        />
                </div>
                <div id="desc" className="text-center">
                    <h3 id="header">{curHeader}</h3>
                    <p>{curTxt}</p> 
                </div>
                </div>
                </section>
            </div>
        );
    }
}

export default TimeLine;