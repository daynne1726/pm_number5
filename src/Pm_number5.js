import React, { Component } from 'react';
import './number5.css';

class Pm_number5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minute: 0,
            second: 0,
            mSecond: 0
        }
    }
    timerStartsNow(e) {
        e.preventDefault();
        this.setState(state => {
            this.timer = setInterval(() => {
                const { minute, second, mSecond } = this.state;
                if (mSecond > 0) {
                    this.setState(({ }) => ({
                        mSecond: mSecond - 1
                    }))
                } else {
                    if (second > 0) {
                        this.setState(({ }) => ({
                            second: second - 1,
                            mSecond: 59
                        }))
                    } else {
                        if (minute === 0) {
                            clearInterval(this.timer)
                        } else {
                            this.setState(({ }) => ({
                                minute: minute - 1,
                                second: 59
                            }))
                        }
                    }
                }

            }, 1000 / 60);

        })

    }
    timerStop(e) {
        e.preventDefault();
        clearInterval(this.timer)
    }
    render() {
        return (
            <center>
                <div class="container">
                    <h1>Stop Watch</h1><br/>
                    <hr/>

                    <h1>{this.state.minute} : {this.state.second} : {this.state.mSecond}</h1>
                    <input onChange={(e) => this.setState({ minute: (e.target.value) })}></input>
                    <button id="b1" class="btn btn-outline-primary" onClick={(e) => this.timerStartsNow(e)}><center>Start</center></button>
                    <button id="b2" class="btn btn-outline-danger" onClick={(e) => this.timerStop(e)}>Stop </button>

                </div>
            </center>
        )
    }
}
export default Pm_number5;