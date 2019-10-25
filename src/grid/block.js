/**
 * BLOCK: wp-uikit2-blocks/grid
 */

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {InnerBlocks, InspectorControls} = wp.editor;
const {SelectControl, CheckboxControl, PanelBody, Tooltip} = wp.components;
const {Fragment} = wp.element;
const {applyFilters} = wp.hooks;

import gutterOptions from './gutterOptions';

//
// const useFluidContainerPerDefault = applyFilters( 'wpBootstrapBlocks.container.useFluidContainerPerDefault', true );
//
// let customMarginOptions = [
// 	{
// 		label: __( 'Small', 'wp-uikit2-blocks' ),
// 		value: 'mb-2',
// 	},
// 	{
// 		label: __( 'Medium', 'wp-uikit2-blocks' ),
// 		value: 'mb-3',
// 	},
// 	{
// 		label: __( 'Large', 'wp-uikit2-blocks' ),
// 		value: 'mb-5',
// 	},
// ];
// customMarginOptions = applyFilters( 'wpBootstrapBlocks.container.customMarginOptions', customMarginOptions );
//
// const marginOptions = [
// 	{
// 		label: __( 'None', 'wp-uikit2-blocks' ),
// 		value: 'mb-0',
// 	},
// 	...customMarginOptions,
// ];


registerBlockType('wp-uikit2-blocks/grid', {
	//https://getuikit.com/v2/docs/grid.html
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Grid', 'wp-uikit2-blocks'), // Block title.
	description: __('Create a fully responsive, fluid and nestable grid layout.', 'jsforwpblocks'),
	icon: 'feedback', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'wp-uikit2-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('Uikit2', 'wp-uikit2-blocks'),
		__('Container', 'wp-uikit2-blocks'),
		__('Grid', 'wp-uikit2-blocks'),
	],

	supports: {
		align: false,
	},

	// attributes are defined server side with register_block_type(). This is needed to make default attributes available in the blocks render callback.

	edit({className, attributes, setAttributes}) {
		const {gridGutter, isFluid, marginAfter} = attributes;

		// Ensure that isFluid value is set (when block gets added value is undefined -> use default value in this case)
		if (isFluid === undefined) {
			setAttributes({isFluid: useFluidContainerPerDefault});
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={__('Documentation', 'wp-uikit2-blocks')}
						initialOpen={false}
					>
						<div>
							{__('The grid system of UIkit follows the mobile-first approach and accomodates up to 10 grid columns. It uses units with predefined classes inside each grid, which define the column width. It is also possible to combine the grid with classes from the Flex component, although it works only in modern browsers.', 'wp-uikit2-blocks')}
							<br/>
							<a href={"https://getuikit.com/v2/docs/grid.html#grid-gutter"}>{__('Reference', 'wp-uikit2-blocks')}</a>
						</div>
					</PanelBody>
					<PanelBody
						title={__('Grid Gutter', 'wp-uikit2-blocks')}
						initialOpen={true}
					>
							<SelectControl
								help={__("Grids automatically create a horizontal gutter between columns and a vertical one between two succeeding grids. By default, the grid gutter is wider on large screens.", "wp-uikit2-blocks")}
								value={gridGutter}
								options={gutterOptions}
								onChange={(selectedGridGutter) => {
									setAttributes({gridGutter: selectedGridGutter});
								}}
							/>
						<div>
							<a href={"https://getuikit.com/v2/docs/grid.html#grid-gutter"}
							   target={"_blank"}>{__('Reference', 'wp-uikit2-blocks')}</a>
						</div>
					</PanelBody>
					<PanelBody>
						<CheckboxControl
							label={__('Fluid', 'wp-uikit2-blocks')}
							checked={isFluid}
							onChange={(isChecked) => {
								setAttributes({isFluid: isChecked});
							}}
						/>

					</PanelBody>
				</InspectorControls>
				<div className={className}>
					<InnerBlocks/>
				</div>
			</Fragment>
		);
	},


	save() {
		return (
			<InnerBlocks.Content/>
		);
	},
});
