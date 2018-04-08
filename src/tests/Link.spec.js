import React from 'react';
import renderer from 'react-test-renderer';
import Link from './../Link';

test('Link changes the class when hovered', () => {
	const component = renderer.create(
		<Link page="https://www.facebook.com">Facebook</Link>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();

	// Manually trigger the callback
	tree.props.onMouseEnter();
	// Re-rendering
	tree = component.toJSON();
	expect(tree).toMatchSnapshot();

	// Manually trigger the callback
	tree.props.onMouseLeave();
	// Re-rendering
	tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
