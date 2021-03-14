import React from 'react';

const ImageList = (props) => {

    // This is simpler - but we will not use it so that we can do more customization to it
    // return props.images.map((image) => {
    //     return <img src={image.urls.regular} alt="img"/>
    // })
    
    /*
    const images = props.images.map((image) => {
        // We give Key ID to biggest div that is returned
        // return (
        //     <div key={image.id}>
        //         <img src={image.urls.regular} alt="img"/>
        //     </div>
        // )
        return <img key={image.id} src={image.urls.regular} alt={image.description}/>
    })
    */

    // Getting the keys out of the image object
    const images = props.images.map(({id, urls, description}) => {
        return <img key={id} src={urls.regular} alt={description}/> 
    })

    return (
        <div>{images}</div>
    )
}

export default ImageList

/*
const numbers = [0,1 ,2 ,3 ,4];

// solution 1
let newNumbers = [];
for (let i=0; i<numbers.length; i++) {
 newNumbers.push(numbers[i] * 10) 
}
// numbers
// newNumbers

// solution 2 
numbers.map((num) => {
	return num * 10
})
// solution 2 - better
numbers.map(num => num * 10)

numbers
*/