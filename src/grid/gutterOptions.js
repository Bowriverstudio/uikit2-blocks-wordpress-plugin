import icon from "../../../gutenberg-course/blocks/01-static/icon";

/**
 * BLOCK: wp-uikit2-blocks/grid
 *
 * Options
 */

const { __ } = wp.i18n;
const { applyFilters } = wp.hooks;


let customGutterOptions = [
	{
		label: __( 'Small', 'wp-uikit2-blocks' ),
		value: 'uk-grid-small',
	},
	{
		label: __( 'Medium', 'wp-uikit2-blocks' ),
		value: 'uk-grid-medium',
	},
	{
		label: __( 'Large', 'wp-uikit2-blocks' ),
		value: 'uk-grid-large',
	},
	{
		label: __( 'Collapse Gutter', 'wp-uikit2-blocks' ),
		value: 'uk-grid-collapse',
	},
];
customGutterOptions = applyFilters( 'wpUiKit2Blocks.grid.customMarginOptions', customGutterOptions );

const gutterOptions = [
	{
		label: __( 'Default', 'wp-uikit2-blocks' ),
		value: 'mb-0',
	},
	...customGutterOptions,
];

export default gutterOptions;
