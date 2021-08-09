export function cx(...args) {
	const styles = args.reduce((acc, current) => {
		return acc + (current ? ' ' + current : '');
	}, '');
	return styles;
}