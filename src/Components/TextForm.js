import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const clickUp = () => {
        // console.log("Clicked");
        setText(text.toUpperCase());
        props.showAlert('Text is Uppercased', 'success')
    }
    const clickLow = () => {
        // console.log("Clicked");
        setText(text.toLowerCase());
        props.showAlert('Text is Lowercased', 'success')

    }

    const clickCap = () => {
        let textArr = text.split(" ");
        let b = "";
        for (let i = 0; i < textArr.length; i++) {
            let upper = textArr[i].charAt(0);
            let lower = textArr[i].toLowerCase();
            if (b === "") {
                b = upper.toUpperCase() + lower.slice(1);
            }
            else {
                b = b + " " + upper.toUpperCase() + lower.slice(1);
            }
        }
        setText(b);
        props.showAlert('Text is Capitalized', 'success')

    }
    const clickCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text copied', 'success')

    }
    const clickRemoveSpace = () => {
        let textArr = text.split(/[ ]+/);
        setText(textArr.join(" "))
        props.showAlert('Extra space removed', 'success')

    }
    const handleOnChange = (event) => {
        // console.log('Changed')
        setText(event.target.value)

    }

    let a;
    if (text === '') {
        a = 0;
    }
    else if (text.endsWith(" ")) {
        a = text.split(" ").length - 1;
    }
    else {
        a = text.split(" ").length
    }


    return (
        <div>
            <div className={"container"}>
                <h1 className={`my-3 text-${props.txtMode}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea rows='8' id="myBox" style={{backgroundColor: props.bgMode==='dark'?' grey':'white'}} value={text} onChange={handleOnChange} className={`form-control my-3 text-${props.txtMode}`}  />
                </div>
                <button className={`btn btn-outline-${props.btnMode} my-1`} onClick={clickUp}>Convert to Uppercase</button>
                <button className={`btn btn-outline-${props.btnMode} my-1 mx-3`} onClick={clickLow}>Convert to Lowercase</button>
                <button className={`btn btn-outline-${props.btnMode} my-1 mx-3`} onClick={clickCap}>Convert to Capitalize case</button>
                <button className={`btn btn-outline-${props.btnMode} my-1 mx-3`} onClick={clickCopy}>Copy Text</button>
                <button className={`btn btn-outline-${props.btnMode} my-1 mx-3`} onClick={clickRemoveSpace}>Remove extra space</button>
            </div>

            <div className={`container text-${props.txtMode}`}>
                <h2 className='my-3'>Your text summary</h2>
                <p> {a} words and {text.length} characters</p>
                <p>{0.008 * a} minutes read</p>
                <h2 className='my-1'>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
