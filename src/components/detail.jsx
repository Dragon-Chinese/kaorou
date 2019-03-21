import React, { Component } from 'react'

export default class Detail extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.props)
  }
  retur() {
    this.props.retu()
  }
  render() {
    return (
      <div className={`Sdetail Sdetail${this.props.id}`}>
        <p
          onClick={() => {
            this.retur()
          }}
        />
      </div>
    )
  }
}
