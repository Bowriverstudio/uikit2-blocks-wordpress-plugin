/**
 * BLOCK: wp-uikit2-blocks/button
 */

import edit from './edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { G, Path, SVG } = wp.components;

registerBlockType( 'wp-uikit2-blocks/button', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Button', 'wp-uikit2-blocks' ), // Block title.
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z" /></G></SVG>,
	category: 'wp-uikit2-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Bootstrap Blocks', 'wp-uikit2-blocks' ),
		__( 'Bootstrap', 'wp-uikit2-blocks' ),
		__( 'Button', 'wp-uikit2-blocks' ),
	],
	example: {
	},

	// attributes are defined server side with register_block_type(). This is needed to make default attributes available in the blocks render callback.

	getEditWrapperProps( attributes ) {
		return { 'data-alignment': attributes.alignment };
	},

	edit,

	save() {
		return null;
	},
} );
