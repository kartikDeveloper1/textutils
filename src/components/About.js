
export default function About(props) {
  
   
  return (
    <>
    <div className="container" >
        <h3 className={`my-3 text-${props.mode==='light'?"dark":"light"}`}>{props.heading}</h3>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header " id="headingOne">
                <button className="accordion-button" style={props.style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    TextUtils
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={props.style}>
                    <strong>TextUtils is a utility</strong> Allows You to manipulate text. 
                    you can set format according to your requirement. In daily scenarios you want to convert text to capital letters
                    or may want to copy to clipboard . It's great application for text analyst who want to analyze data for generating reports.
                    <br/>  
                    <code>This Application is a demonstration of
                    text based website using react js.</code>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={props.style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Features
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={props.style}>
                    <strong>Features includes....</strong> 
                    <ul>
                        <li>Converting text to Uppercase.</li>
                        <li>Converting text to Lowercase.</li>
                        <li>Copying text to Clipboard.</li>
                        <li>Removing Extra Sapces from text.</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={props.style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Services
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={props.style}>
                    <strong>Provides Services...</strong>
                    <ul>
                        <li>You can enable/Disable Dark theme mode.</li>
                        <code>By clicking right side Switch button.</code>
                        <li>Fast Manipulation of text. </li>
                        <li>Reduces Efforts.</li>
                        <li>Saves Time.</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
