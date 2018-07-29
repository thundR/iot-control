import React from "react"
import 'isomorphic-unfetch'

export default class Test extends React.Component {

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
