import React, { Component, Fragment } from 'react'
import './lifestyle.css'

class Life extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            sayToMother: '',
            talkToMother: [
                "小时候呜呜大哭我什么都记不得啦",
                "在那个时候少不了妈妈对我的爱心牌唠叨",
                "成年了妈妈对我的生活关心生怕我冷着饿着",
                "即便在异乡，妈妈的温柔可一点不少",
                "成家后一定带上孩子和媳妇，说：走，去看看咱妈",
                "妈慢慢老了。妈妈，我来照顾您，别再为我操劳了",
                "我真盼望时光时光慢些吧 不要再让您再变老了",
                "…最后，期待全是陪伴，父母要求的不多，陪伴是最好的爱❤️",
                "妈，母亲节快乐！"
            ],
            talkArrItemIndex: 0,
            talkArrIndex: 0
        }   
        this.inMyLifeToSay = this.inMyLifeToSay.bind(this);
        this.Iamgrowing = this.Iamgrowing.bind(this);
        this.Iamgrowing();
    }

    render(){
        return (
            <Fragment>
                <h1>
                        <span className="spanfont1">我：</span>
                        <span className="spanfont">{this.state.sayToMother}</span>
                        <span className="cursor">|</span>
                </h1>
                
            </Fragment>
        )
    }

    Iamgrowing(){
        setInterval(() => {
            if(this.state.talkArrItemIndex <= this.state.talkToMother[this.state.talkArrIndex].length){
                this.setState({
                    talkArrItemIndex: this.state.talkArrItemIndex + 1
                })
                this.inMyLifeToSay();
            }
            if(this.state.talkArrItemIndex === this.state.talkToMother[this.state.talkArrIndex].length + 1){
                this.setState({
                    talkArrItemIndex: 0,
                    talkArrIndex: this.state.talkArrIndex + 1,
                    id: this.state.id + 5
                })
                this.inMyLifeToSay()
            }
            if(this.state.talkArrIndex === this.state.talkToMother.length){
                this.setState({
                    talkArrItemIndex: 0,
                    talkArrIndex: 0,
                    id: 0
                })
            }
        }, 300)
    }

    inMyLifeToSay(){
        switch(this.state.id){
            case 0:
                this.setState({
                    sayToMother: this.state.talkToMother[this.state.talkArrIndex].slice(0, this.state.talkArrItemIndex)
                });     
               break;
            case 5:
               this.setState({
                   sayToMother: this.state.talkToMother[this.state.talkArrIndex].slice(0, this.state.talkArrItemIndex)
               });     
            break;
            case 10:
                this.setState({
                    sayToMother: this.state.talkToMother[this.state.talkArrIndex].slice(0, this.state.talkArrItemIndex)
                });     
               break;
            case 15:
               this.setState({
                   sayToMother: this.state.talkToMother[this.state.talkArrIndex].slice(0, this.state.talkArrItemIndex)
               });     
            break;
            case 20:
                this.setState({
                    sayToMother: this.state.talkToMother[this.state.talkArrIndex].slice(0, this.state.talkArrItemIndex)
                });     
            break;
            case 25:
                this.setState({
                    sayToMother: this.state.talkToMother[this.state.talkArrIndex].slice(0, this.state.talkArrItemIndex)
                });     
            break;
            case 30:
                this.setState({
                    sayToMother: this.state.talkToMother[this.state.talkArrIndex].slice(0, this.state.talkArrItemIndex)
                });     
               break;
            case 35:
               this.setState({
                   sayToMother: this.state.talkToMother[this.state.talkArrIndex].slice(0, this.state.talkArrItemIndex)
               });     
            break;
            case 40:
                this.setState({
                    sayToMother: this.state.talkToMother[this.state.talkArrIndex].slice(0, this.state.talkArrItemIndex)
                });     
            break;
        }
    };
}

export default Life;