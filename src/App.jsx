import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './App.css'
import Index from './components/index'
import Product from './components/product'
import BodyList from './components/bodyList'
import Detail from './components/detail'
class App extends Component {
  constructor(props) {
    super(props)
    this.swiper = null
    this.state = {
      isShow: false,
      detailId: 0,
      ind: 1
    }
    this.tabType = this.tabType.bind(this)
    this.detailTab = this.detailTab.bind(this)
    this.proType = this.proType.bind(this)
  }
  componentDidMount() {
    this.swiper = new Swiper('.swiper-container', {
      direction: 'vertical'
    })
  }
  detailTab() {
    this.setState(
      {
        isShow: false
      },
      () => {
        let newSwiper = new Swiper('.swiper-container', {
          direction: 'vertical'
        })
        newSwiper.slideTo(this.state.ind, 0)
      }
    )
  }
  tabType(val, ind) {
    this.setState({
      isShow: true,
      detailId: val,
      ind
    })
  }

  proType(val, ind) {
    this.setState({
      isShow: true,
      detailId: val,
      ind
    })
  }

  render() {
    return (
      <div className="index">
        {this.state.isShow ? (
          <Detail id={this.state.detailId} retu={this.detailTab} />
        ) : (
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <Index />
              <Product proType={this.proType} />
              <BodyList tabType={this.tabType} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
