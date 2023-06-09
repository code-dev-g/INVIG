import Lottie from "react-lottie";
import animationData from "../../public/ErrorLottie.json";

function ErrorLottie() {
	const defaultOptions = {
		loop: false,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div>
			<Lottie options={defaultOptions} height={500} width={500} />
		</div>
	);
}

export default ErrorLottie;