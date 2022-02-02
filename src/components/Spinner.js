function Spinner() {
	return (
		<section>
			<div className="loader-wrapper">
				<div className="loader before:animate-round-reverse after:animate-round"></div>
				<div className="loader-section section-left"></div>
				<div className="loader-section section-right"></div>
			</div>
		</section>
	);
}

export default Spinner;
