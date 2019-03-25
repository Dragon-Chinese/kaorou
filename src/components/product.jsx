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

import z1 from '../static/sc/z1.png'
import z2 from '../static/sc/z2.png'
import z3 from '../static/sc/z3.png'
import z4 from '../static/sc/z4.png'
import z5 from '../static/sc/z5.png'
import z6 from '../static/sc/z6.png'
import z7 from '../static/sc/z7.png'
import z8 from '../static/sc/z8.png'
import z9 from '../static/sc/z9.png'
import z10 from '../static/sc/z10.png'
import z11 from '../static/sc/z11.png'
import z12 from '../static/sc/z12.png'
import z13 from '../static/sc/z13.png'
import z14 from '../static/sc/z14.png'
import z15 from '../static/sc/z15.png'
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
      inputValue: 3
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
    this.setState(
      {
        inputValue: value
      },
      () => {
        if (this.state.inputValue != 3) return
        new Swiper('.swiper-container2', {
          autoplay: {
            delay: 1200,
            stopOnLastSlide: false,
            autoplayDisableOnInteraction: false,
            disableOnInteraction: false
          },
          loop: true
        })
      }
    )
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
          {this.state.inputValue === 2 ? (
            <div className="swiper-wrapper">
              <div className="swiper-slide two">
                <div><img
                  src={t6}
                  onClick={() => {
                    this.pro(6)
                  }}
                  alt=""
                />
                <img
                  src={z6}
                  onClick={() => {
                    this.pro(6)
                  }}
                  alt=""
                />
                </div>
                <div>
                <img
                  src={t10}
                  onClick={() => {
                    this.pro(10)
                  }}
                  alt=""
                />
                <img
                  src={z10}
                  onClick={() => {
                    this.pro(10)
                  }}
                  alt=""
                />
                </div>
                
              </div>
            </div>
          ) : (
            ''
          )}

          {this.state.inputValue === 3 ? (
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div><img
                  src={t1}
                  onClick={() => {
                    this.pro(1)
                  }}
                  alt=""
                />
                <img 
                  src={z1}
                  onClick={() => {
                    this.pro(1)
                  }}/>
                </div>
                <div><img
                  src={t2}
                  onClick={() => {
                    this.pro(2)
                  }}
                  alt=""
                />
                <img 
                  src={z2}
                  onClick={() => {
                    this.pro(2)
                  }}
                  alt=""
                  />
                </div>
                <div><img
                  src={t3}
                  onClick={() => {
                    this.pro(3)
                  }}
                  alt=""
                />
                <img src={z3}
                  onClick={() => {
                    this.pro(3)
                  }}
                  alt=""/>
                </div>
              </div>
              <div className="swiper-slide">
                <div><img
                  src={t4}
                  onClick={() => {
                    this.pro(4)
                  }}
                  alt=""
                />
                <img src={z4}
                  onClick={() => {
                    this.pro(4)
                  }}
                  alt=""/>
                </div>
                <div><img
                  src={t5}
                  onClick={() => {
                    this.pro(5)
                  }}
                  alt=""
                />
                <img src={z5}
                  onClick={() => {
                    this.pro(5)
                  }}
                  alt=""/>
                </div>
                <div><img
                  src={t15}
                  onClick={() => {
                    this.pro(15)
                  }}
                  alt=""
                />
                <img src={z15}
                  onClick={() => {
                    this.pro(15)
                  }}
                  alt=""/>
                </div>
              </div>
              <div className="swiper-slide">
                <div><img
                  src={t7}
                  onClick={() => {
                    this.pro(7)
                  }}
                  alt=""
                />
                <img src={z7}
                  onClick={() => {
                    this.pro(7)
                  }}
                  alt=""/>
                </div>
                <div><img
                  src={t8}
                  onClick={() => {
                    this.pro(8)
                  }}
                  alt=""
                />
                <img src={z8}
                  onClick={() => {
                    this.pro(8)
                  }}
                  alt=""/>
                </div>
                <div><img
                  src={t9}
                  onClick={() => {
                    this.pro(9)
                  }}
                  alt=""
                />
                <img src={z9}
                  onClick={() => {
                    this.pro(9)
                  }}
                  alt=""/>
                </div>
              </div>
              <div className="swiper-slide">
                <div><img
                  src={t11}
                  onClick={() => {
                    this.pro(11)
                  }}
                  alt=""
                />
                <img src={z11}
                  onClick={() => {
                    this.pro(11)
                  }}
                  alt=""/>
                </div>
                <div><img
                  src={t12}
                  onClick={() => {
                    this.pro(12)
                  }}
                  alt=""
                />
                <img src={z12}
                  onClick={() => {
                    this.pro(12)
                  }}
                  alt=""/>
                </div>
                <div><img
                  src={t14}
                  onClick={() => {
                    this.pro(14)
                  }}
                  alt=""
                />
                <img src={z14}
                  onClick={() => {
                    this.pro(14)
                  }}
                  alt=""/>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}

          {this.state.inputValue === 1 ? (
            <div className="swiper-wrapper">
              <div className="swiper-slide three">
              <div>
              <img
                  src={t13}
                  onClick={() => {
                    this.pro(13)
                  }}
                  alt=""
                />
                <img
                  src={z13}
                  onClick={() => {
                    this.pro(13)
                  }}
                  alt=""
                />
              </div>
                
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="bot" />
      </div>
    )
  }
}
