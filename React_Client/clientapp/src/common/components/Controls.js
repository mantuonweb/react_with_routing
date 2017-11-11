import React,{ Component } from 'react';
export class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            content:props.content
        };
        this.changeHandler=props.onChange;
        this.isValid=this.isValid.bind(this);

        //console.log(this.state);
    }
    componentWillReceiveProps(newprops) {
        this.setState({
            name: newprops.name,
            content:newprops.content
        });
        this.changeHandler = newprops.onChange;
    }
    render(){
        return (<input type="text" className={this.props.className} id={this.state.name} ref="this.state.content" onChange={this.onValueChange.bind(this)}></input>);
    }

    //custom method
    onValueChange(e){
        this.setState({
            content: e.target.value
        });
        this.changeHandler(e.target.value);
        //console.log(e && e.target && e.target.value);
    }

    isValid(){
        console.log("hi")
        return "hel"
    }
}
export class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            content: props.content
        };
        this.changeHandler = props.onChange;
        this.isValid = this.isValid.bind(this);
        //console.log(this.state);
    }
    componentWillReceiveProps(newprops) {
        this.setState({
            name: newprops.name,
            content: newprops.content
        });
        this.changeHandler = newprops.onChange;
    }
    render() {
        return (<input className={this.props.className} type="password" id={this.state.name} ref="this.state.content" onChange={this.onValueChange.bind(this)}></input>);
    }

    //custom method
    onValueChange(e) {
        this.setState({
            content: e.target.value
        });
        this.changeHandler(e.target.value);
        //console.log(e && e.target && e.target.value);
    }

    isValid() {
        return this.state.content;
    }
}


export class Form extends Component {
    render() {
        return (
            <form className="form-horiziontal" >
                {this.props.children}
            </form>
        );
    }
}