/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, URLInput, InspectorControls, BlockControls, AlignmentToolbar } = wp.editor;
const { Dashicon, IconButton, SelectControl, PanelBody } = wp.components;
const { applyFilters } = wp.hooks;

class BootstrapButtonEdit extends Component {
	render() {
		const { attributes, className, setAttributes, isSelected } = this.props;
		const { url, text, style, alignment } = attributes;

		let styleOptions = [
			{ label: __( 'Primary', 'wp-uikit2-blocks' ), value: 'primary' },
			{ label: __( 'Secondary', 'wp-uikit2-blocks' ), value: 'secondary' },
		];
		styleOptions = applyFilters( 'wpBootstrapBlocks.button.styleOptions', styleOptions );

		return (
			<Fragment>
				<div
					className={ className }
					data-alignment={ alignment }
				>
					<RichText
						placeholder={ __( 'Add text…' ) }
						value={ text }
						onChange={ ( value ) => setAttributes( { text: value } ) }
						formattingControls={ [] }
						keepPlaceholderOnFocus
					/>
					<InspectorControls>
						<PanelBody>
							<SelectControl
								label={ __( 'Style', 'wp-uikit2-blocks' ) }
								value={ style }
								options={ styleOptions }
								onChange={ ( selectedStyle ) => {
									setAttributes( { style: selectedStyle } );
								} }
							/>
						</PanelBody>
					</InspectorControls>
					<BlockControls>
						<AlignmentToolbar
							value={ alignment }
							onChange={ ( newAlignment ) => ( setAttributes( { alignment: newAlignment } ) ) }
						/>
					</BlockControls>
				</div>
				{ isSelected && (
					<form
						className="wp-block-wp-uikit2-blocks-button-link"
						onSubmit={ ( event ) => event.preventDefault() }>
						<Dashicon icon="admin-links" />
						<URLInput
							value={ url }
							onChange={ ( value ) => setAttributes( { url: value } ) }
						/>
						<IconButton icon="editor-break" label={ __( 'Apply' ) } type="submit" />
					</form>
				) }
			</Fragment>
		);
	}
}

export default BootstrapButtonEdit;
