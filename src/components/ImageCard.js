import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        // wiring up a Ref
        this.imageRef = React.createRef()
        this.state = { spans: 0 }
    }

    componentDidMount() {
        // console.log(this.imageRef)
        // this returns 0 - async call - before the image is loaded, it tried to check height - which is zero.
        // console.log(this.imageRef.current.clientHieght)

        // To deal with above probelem and set spans
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    // to make we dont run into 'this' undefined issue
    setSpans = () => {
        // console.log(this.imageRef.current.clientHeight)
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10) 
        // ES2015 syntax can used to make that smaller
        // this.setState({ spans: spans })
        this.setState({ spans })
    }

    render () {

        const { description, urls } = this.props.image
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img
                 ref={this.imageRef}
                 src={urls.regular}
                 alt={description}
                />
            </div>
        )
    }
}

export default ImageCard