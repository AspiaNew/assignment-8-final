import React from "react";
const QueryPart=()=>{
    return(
        <div className="my-4">
<h1 className=" text-center bg-warning">Part of Query</h1>
<div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4">
<div className="part1">
<div className="card h-100">
<div className="card-body">
<h4 card-title bg-primary p-3 fw-bold>How Does React Works</h4>
<p className="card-text">ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
</div>
</div>
</div>

<div className="part1">
<div className="card h-100">
<div className="card-body">
<h4 card-title bg-secondary p-3 fw-bold>What is the advantage of useState?</h4>
<p className="card-text">The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component.</p>
</div>
</div>
</div>
<div className="part1">
<div className="card h-100">
<div className="card-body">
<h4 card-title bg-success p-3 fw-bold>Difference Between Props and State</h4>
<p className="card-text">The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.</p>
</div>
</div>
</div>


    </div>
</div>
        </div>
    )
}
export default QueryPart;