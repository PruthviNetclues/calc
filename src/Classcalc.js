import React, { Component } from "react";

export default class calc extends Component{
    constructor(props){
        super(props);
        this.state = {
            input: {
                num1: "",
                num2: "",
            },
            result: "",
        };
    }
    handleInput = (e) => {
        this.setState({
            input: {
                ...this.state.input,
                [e.target.name]: e.target.value,
            },
        });
    };
    sum = () => {
        const { num1, num2 } = this.state.input;
        this.setState({
            result: Number(num1) + Number(num2),
        });
    }
    sub = () => {
        const { num1, num2 } = this.state.input;
        this.setState({
            result: Number(num1) - Number(num2),
        });
    }
    mul = () => {
        const { num1, num2 } = this.state.input;
        this.setState({
            result: Number(num1) * Number(num2),
        });
    }
    div = () => {
        const { num1, num2 } = this.state.input;
        this.setState({
            result: Number(num1) / Number(num2),
        });
    }
    render()
    {
        const { num1,num2}= this.state.input;
        const {result}= this.state;
        return(
            <div>
                {console.log("ehlooo")}
                <input onChange={this.handleInput} name="num1" value={num1} type="number" />
                <br />
                <input onChange={this.handleInput} name="num2" value={num2} type="number" />
                <br/>
                <button onClick={this.sum}>Addition</button>
                <button onClick={this.sub}>Subraction</button>
                <button onClick={this.mul}>Multiplication</button>
                <button onClick={this.div}>Division</button>
                <br/>
                <span>result:{result}</span>
            </div>
        );
    }
}
