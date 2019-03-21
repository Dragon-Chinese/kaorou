import React, { Component } from 'react'
import Iscroll from 'iscroll/build/iscroll-probe'
import t1 from '../static/sc/1.png'
import t2 from '../static/sc/2.png'
import t3 from '../static/sc/3.png'
import t4 from '../static/sc/4.png'
import t5 from '../static/sc/5.png'
import t6 from '../static/sc/6.png'
import t7 from '../static/sc/7.png'
import t8 from '../static/sc/8.png'
import t9 from '../static/sc/9.png'
import t10 from '../static/sc/10.png'
import t11 from '../static/sc/11.png'
import t12 from '../static/sc/12.png'
import t13 from '../static/sc/13.png'
import t14 from '../static/sc/14.png'
import t15 from '../static/sc/15.png'
import Huo from '../static/huo.png'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import 'antd/dist/antd.css'
import { Slider } from 'antd'
export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Mshow: true,
      inputValue: 1
    }
  }
  componentWillMount() {
    let isShow = sessionStorage.getItem('is')
    if (isShow) {
      this.setState({
        Mshow: false
      })
    } else {
      this.setState({
        Mshow: true
      })
    }
  }
  componentDidMount() {
    this.swiper = new Swiper('.swiper-container2', {
      autoplay: {
        delay: 1200,
        stopOnLastSlide: false,
        autoplayDisableOnInteraction: false,
        disableOnInteraction: false
      },
      loop: true
    })
  }

  close() {
    this.setState({
      Mshow: false
    })
    sessionStorage.setItem('is', true)
  }

  pro(val) {
    this.props.proType(val, 1)
  }

  onChange = value => {
    console.log(value)
    this.setState({
      inputValue: value
    })
  }

  render() {
    return (
      <div className="swiper-slide Mindex">
        {this.state.Mshow ? (
          <div className="mc" onClick={this.close.bind(this)}>
            <span onClick={this.close.bind(this)} />
          </div>
        ) : (
          ''
        )}
        <div className="top" />
        <div className="click">
          <div className="wz" />
          <Slider
            min={1}
            max={3}
            onChange={this.onChange}
            value={this.state.inputValue}
            tooltipVisible={false}
          />
          <div className="huo">
            <img src={Huo} alt="" />
            {<img src={this.state.inputValue >= 2 ? Huo : ''} alt="" />}
            {<img src={this.state.inputValue === 3 ? Huo : ''} alt="" />}
          </div>
        </div>
        <div className="swiper-container2">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src={t1}
                onClick={() => {
                  this.pro(1)
                }}
                alt=""
              />
              <img
                src={t2}
                onClick={() => {
                  this.pro(2)
                }}
                alt=""
              />
              <img
                src={t3}
                onClick={() => {
                  this.pro(3)
                }}
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src={t4}
                onClick={() => {
                  this.pro(4)
                }}
                alt=""
              />
              <img
                src={t5}
                onClick={() => {
                  this.pro(5)
                }}
                alt=""
              />
              <img
                src={t6}
                onClick={() => {
                  this.pro(6)
                }}
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src={t7}
                onClick={() => {
                  this.pro(7)
                }}
                alt=""
              />
              <img
                src={t8}
                onClick={() => {
                  this.pro(8)
                }}
                alt=""
              />
              <img
                src={t9}
                onClick={() => {
                  this.pro(9)
                }}
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src={t10}
                onClick={() => {
                  this.pro(10)
                }}
                alt=""
              />
              <img
                src={t11}
                onClick={() => {
                  this.pro(11)
                }}
                alt=""
              />
              <img
                src={t12}
                onClick={() => {
                  this.pro(12)
                }}
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src={t13}
                onClick={() => {
                  this.pro(13)
                }}
                alt=""
              />
              <img
                src={t14}
                onClick={() => {
                  this.pro(14)
                }}
                alt=""
              />
              <img
                src={t15}
                onClick={() => {
                  this.pro(15)
                }}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bot" />
      </div>
    )
  }
}
