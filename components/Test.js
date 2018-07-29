import React from "react"
import 'isomorphic-unfetch'
import Link from 'next/link'

export default class Test extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

<<<<<<< HEAD
  render() {
    return (
      <div>
        Hello World {this.props.userAgent}
      </div>
    )
  }
}
=======
    async getData() {
        const res = await fetch('https://api.github.com/repos/zeit/next.js')
        const json = await res.json()
        this.setState({
            blah: json.stargazers_count
        })
    }

    constructor(props) {
        super(props)

        this.getData()
        this.state = {}
    }

    render() {
        return (
            <div>
              <p> testerino  {this.state.blah} </p>
            </div>
        )
    }
}
>>>>>>> dc32163d52aaea9596cf880c5779b7db5f50c4f6
