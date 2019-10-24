/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InnerBlocks, InspectorControls } = wp.editor;
const { CheckboxControl, ColorPalette, PanelBody, RangeControl, SelectControl } = wp.components;
const { Component, Fragment } = wp.element;
const { applyFilters } = wp.hooks;

const ColumnSizeRangeControl = ( { label, attributeName, value, setAttributes } ) => {
	return (
		<RangeControl
			label={ label }
			value={ value }
			onChange={ ( selectedSize ) => {
				setAttributes( {
					[ attributeName ]: selectedSize,
				} );
			} }
			min={ 0 }
			max={ 12 }
		/>
	);
};

let bgColorOptions = [
	{ name: 'primary', color: '#007bff' },
	{ name: 'secondary', color: '#6c757d' },
];

bgColorOptions = applyFilters( 'wpBootstrapBlocks.column.bgColorOptions', bgColorOptions );

let paddingOptions = [
	{ label: __( 'None', 'wp-uikit2-blocks' ), value: '' },
	{ label: __( 'Small', 'wp-uikit2-blocks' ), value: 'p-2' },
	{ label: __( 'Medium', 'wp-uikit2-blocks' ), value: 'p-3' },
	{ label: __( 'Large', 'wp-uikit2-blocks' ), value: 'p-5' },
];

paddingOptions = applyFilters( 'wpBootstrapBlocks.column.paddingOptions', paddingOptions );

export default class BootstrapColumnEdit extends Component {
	render() {
		const { attributes, className, setAttributes } = this.props;
		const { sizeXl, sizeLg, sizeMd, sizeSm, sizeXs, bgColor, padding, centerContent } = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( 'Column size', 'wp-uikit2-blocks' ) }
						initialOpen={ false }
					>
						<ColumnSizeRangeControl
							label={ __( 'Xl Columns', 'wp-uikit2-blocks' ) }
							attributeName="sizeXl"
							value={ sizeXl }
							setAttributes={ setAttributes }
						/>
						<ColumnSizeRangeControl
							label={ __( 'Lg Columns', 'wp-uikit2-blocks' ) }
							attributeName="sizeLg"
							value={ sizeLg }
							setAttributes={ setAttributes }
						/>
						<ColumnSizeRangeControl
							label={ __( 'Md Columns', 'wp-uikit2-blocks' ) }
							attributeName="sizeMd"
							value={ sizeMd }
							setAttributes={ setAttributes }
						/>
						<ColumnSizeRangeControl
							label={ __( 'Sm Columns', 'wp-uikit2-blocks' ) }
							attributeName="sizeSm"
							value={ sizeSm }
							setAttributes={ setAttributes }
						/>
						<ColumnSizeRangeControl
							label={ __( 'Xs Columns', 'wp-uikit2-blocks' ) }
							attributeName="sizeXs"
							value={ sizeXs }
							setAttributes={ setAttributes }
						/>
					</PanelBody>
					<PanelBody
						title={ __( 'Background color', 'wp-uikit2-blocks' ) }
						initialOpen={ false }
					>
						<ColorPalette
							colors={ bgColorOptions }
							value={ bgColor }
							onChange={ ( value ) => {
								// Value is undefined if color gets cleared
								if ( ! value ) {
									setAttributes( {
										bgColor: '',
									} );
								} else {
									const selectedColor = bgColorOptions.find( ( c ) => c.color === value );
									if ( selectedColor ) {
										setAttributes( {
											bgColor: selectedColor.name,
										} );
									}
								}
							} }
							disableCustomColors
						/>
						{ bgColor ?
							<CheckboxControl
								label={ __( 'Center content vertically in row', 'wp-uikit2-blocks' ) }
								checked={ centerContent }
								onChange={ ( isChecked ) => setAttributes( { centerContent: isChecked } ) }
								help={ __( 'This setting only applies if there is no vertical alignment set on the parent row block.', 'wp-uikit2-blocks' ) }
							/> : null
						}
					</PanelBody>
					<PanelBody
						title={ __( 'Padding (inside column)', 'wp-uikit2-blocks' ) }
						initialOpen={ false }>
						<SelectControl
							label={ __( 'Size', 'wp-uikit2-blocks' ) }
							value={ padding }
							options={ paddingOptions }
							onChange={ ( value ) => {
								setAttributes( {
									padding: value,
								} );
							} }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ className }>
					<InnerBlocks templateLock={ false } />
				</div>
			</Fragment>
		);
	}
}
