import { useEffect, useState, useRef } from "react";

export default function InViewNumberAnimator({
	targetValue,
	duration = 2000,
	suffix,
}) {
	const [currentValue, setCurrentValue] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const startTimeRef = useRef(null);
	const containerRef = useRef(null);

	const animate = (timestamp) => {
		if (!startTimeRef.current) {
			startTimeRef.current = timestamp;
		}

		const progress = timestamp - startTimeRef.current;
		const percentage = Math.min(progress / duration, 1);

		setCurrentValue(Math.floor(percentage * targetValue));

		if (progress < duration && isVisible) {
			requestAnimationFrame(animate);
		}
	};

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 1,
		};

		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			if (entry.isIntersecting) {
				setIsVisible(true);
				observer.disconnect();
			}
		}, options);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		if (isVisible && targetValue >= currentValue) {
			startTimeRef.current = null;
			requestAnimationFrame(animate);
		}
	}, [isVisible, targetValue]);

	return (
		<span
			ref={containerRef}
			style={{
				fontFamily: "Noto Sans, monospace",
			}}
		>
			{(isVisible ? currentValue.toString() : "0")
				.padStart(targetValue.toString().length, "0")
				.concat(suffix ? suffix : "")}
		</span>
	);
}
