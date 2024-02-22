import React from 'react';
import PdfRead from './Pdf/PdfRead';

const Blog = () => {

    return (
        <div className='mx-9'>

            {/* ----------------pdf reader------------------------  */}
            <div className='mt-9 ml-40'>
                <div className="indicator w-96 bg-slate-600">
                    <div className="indicator-item indicator-bottom">
                        <button><PdfRead></PdfRead></button>
                    </div>
                    <div className="card border">
                        <div className="card-body">
                            <h2 className="card-title text-slate-100">This is the blog site of the website</h2>
                            <p className='text-slate-100 italic'>To know more about the blogs please click the make pdf button to get all the information about the blogs.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-12">
                <div className="collapse-title text-xl font-medium">
                    <h1 className='text-red-600 font-bold text-3xl'>1.Tell us the differences between uncontrolled and controlled components.</h1>
                </div>
                <div className="collapse-content">
                    <p className='mt-5 text-lg font-bold text-center italic leading-8'>The differences between uncontrolled and controlled components are-
                        1.In controlled components value management is managed by react.Whereas in uncontrolled component the value management managed by component's own internal state.
                        2.In controlled components data flow happpens from parent component to component.But in uncontrolled components data flow happens within the component.
                        3.Controlled component is easiar to debug.But uncontrolled is difficult to debug.
                        4.Controlled components code compleity is less complex code.Uncontrolled component is more complex code.
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-9">
                <div className="collapse-title text-xl font-medium">
                    <h1 className='text-red-600 font-bold text-3xl'>2.How to validate React props using PropTypes</h1>
                </div>
                <div className="collapse-content">
                    <p className='mt-5 text-lg font-bold text-center italic leading-8'>
                        We can validate react props using prototypes by-
                        PropTypes.any
                        PropTypes.bool
                        PropTypes.number
                        PropTypes.string
                        PropTypes.func
                        PropTypes.array
                        PropTypes.object
                        PropTypes.symbol
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-9">
                <div className="collapse-title text-xl font-medium">
                    <h1 className='text-red-600 font-bold text-3xl'>3.Tell us the difference between nodejs and express js.</h1>
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p><p className='mt-5 text-lg font-bold text-center italic leading-8'>
                        The difference between nodejs and express js is that nodejs is the server side language of javascript and express js is the framework of nodejs language.
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-9">
                <div className="collapse-title text-xl font-medium">
                    <h1 className='text-red-600 font-bold text-3xl'> 4.What is a custom hook, and why will you create a custom hook?</h1>
                </div>
                <div className="collapse-content">
                    <p className='mt-5 text-lg font-bold text-center italic leading-8'>
                        Custom hook is the reusable function that helps a developer to use that function and make an unique functionality in react applications.I will create a custom hook because it can be reused in every function and make the code easy and clean.Also it reduce the time.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Blog;


