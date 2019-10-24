/**
 * BLOCK: wp-uikit2-blocks/column
 */

import edit from './edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType( 'wp-uikit2-blocks/column', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Column', 'wp-uikit2-blocks' ), // Block title.
	icon: 'menu', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'wp-uikit2-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Bootstrap Blocks', 'wp-uikit2-blocks' ),
		__( 'Bootstrap', 'wp-uikit2-blocks' ),
		__( 'Column', 'wp-uikit2-blocks' ),
	],
	parent: [ 'wp-uikit2-blocks/row' ],

	// attributes are defined server side with register_block_type(). This is needed to make default attributes available in the blocks render callback.

	getEditWrapperProps( attributes ) {
		const { sizeXl, sizeLg, sizeMd, sizeSm, sizeXs, bgColor, padding, centerContent } = attributes;

		return {
			'data-size-xs': sizeXs,
			'data-size-sm': sizeSm,
			'data-size-md': sizeMd,
			'data-size-lg': sizeLg,
			'data-size-xl': sizeXl,
			'data-bg-color': bgColor,
			'data-padding': padding,
			'data-center-content': centerContent,
		};
	},

	edit,

	save() {
		return (
			<InnerBlocks.Content />
		);
	},
} );
