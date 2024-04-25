import React from 'react';
import './error.css'; // Assuming you have a separate CSS file for styling
import { NavLink } from 'react-router-dom';

function Error() {
  return (
    <>
      <section className="page_404">
	<div className="container">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-10 col-sm-offset-1  text-center">
		<div className="four_zero_four_bg">
			<h1 className="text-center text-red-500 ">404</h1>
		
		
		</div>
		
		<div className="contant_box_404">
		<h3 className="h2">
		Are You Lost Babygirl?
		</h3>
		
		<p>the page you are looking for is not available!</p>
		
		<NavLink to="/" className="link_404">Go to Home</NavLink>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
    </>
  )
}

export default Error




