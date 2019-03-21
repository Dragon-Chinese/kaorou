import React, { Component } from 'react'
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

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      proList: [
        {
          tlink: t1,
          zlink: z1,
          ind: 1
        },
        {
          tlink: t2,
          zlink: z2,
          ind: 2
        },
        {
          tlink: t3,
          zlink: z3,
          ind: 3
        },
        {
          tlink: t4,
          zlink: z4,
          ind: 4
        },
        {
          tlink: t5,
          zlink: z5,
          ind: 5
        },
        {
          tlink: t6,
          zlink: z6,
          ind: 6
        },
        {
          tlink: t7,
          zlink: z7,
          ind: 7
        },
        {
          tlink: t8,
          zlink: z8,
          ind: 8
        },
        {
          tlink: t9,
          zlink: z9,
          ind: 9
        },
        {
          tlink: t10,
          zlink: z10,
          ind: 10
        },
        {
          tlink: t11,
          zlink: z11,
          ind: 11
        },
        {
          tlink: t12,
          zlink: z12,
          ind: 12
        },
        {
          tlink: t13,
          zlink: z13,
          ind: 13
        },
        {
          tlink: t14,
          zlink: z14,
          ind: 14
        },
        {
          tlink: t15,
          zlink: z15,
          ind: 15
        }
      ]
    }
  }

  tabProps(val) {
    this.props.tabType(val, 2)
  }

  render() {
    return (
      <div className="swiper-slide Slist">
        <h2 />
        <ul>
          {this.state.proList.map((item, index) => {
            return (
              <li
                onClick={e => {
                  this.tabProps(item.ind)
                }}
                key={index}
              >
                <img src={item.tlink} alt="" />
                <img src={item.zlink} alt="" />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
