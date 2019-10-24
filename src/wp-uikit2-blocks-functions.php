<?php
/**
 * Core plugin functions.
 *
 * @package wp-uikit2-blocks
 */

/**
 * Get template by name and return HTML.
 *
 * @param string $template_name Name of template.
 * @param array  $attributes Block attributes.
 * @param string $content Block content.
 * @param string $template_path Path to template.
 * @param string $default_path Default path if template couldn't be found in $template_path.
 *
 * @return false|string
 */
function wp_uikit2_blocks_get_template( $template_name, $attributes, $content = '', $template_path = '', $default_path = '' ) {
	$located = wp_uikit2_blocks_locate_template( $template_name, $template_path, $default_path );

	if ( ! file_exists( $located ) ) {
		/* translators: %s template */
		_doing_it_wrong( __FUNCTION__, sprintf( esc_html__( '%s does not exist.', 'wp-uikit2-blocks' ), '<code>' . esc_html( $located ) . '</code>' ), '1.0' );
		return '';
	}

	// Allow 3rd party plugins or themes to filter the located template file
	$located = apply_filters( 'wp_uikit2_blocks_get_template', $located, $template_name, $template_path, $default_path );

	// Start output capture.
	ob_start();

	require $located;

	// Record output.
	$html = ob_get_contents();
	ob_end_clean();

	return $html;
}

/**
 * Locate a template by name an return its path.
 *
 * Load order for templates:
 *
 * theme/$template_path/$template_name
 * theme/$template_name
 * $default_path/$template_name
 *
 * @param string $template_name Name of template.
 * @param string $template_path Path to template.
 * @param string $default_path Default path if template couldn't be found in $template_path.
 *
 * @return string
 */
function wp_uikit2_blocks_locate_template( $template_name, $template_path = '', $default_path = '' ) {
	// If template path is not set get plugin from defined wp_uikit2_blocks_template_path (default: wp-uikit2-blocks/)
	if ( ! $template_path ) {
		$template_path = apply_filters( 'wp_uikit2_blocks_template_path', 'wp-uikit2-blocks/' );
	}

	// If default path is not set, get template from plugin directory
	if ( ! $default_path ) {
		$default_path = untrailingslashit( plugin_dir_path( WP_UIKIT2_BLOCKS_PLUGIN_FILE ) ) . '/src/templates/';
	}

	// Add template file extension if missing
	if ( ! preg_match( '/(\.php)$/i', $template_name ) ) {
		$template_name .= '.php';
	}

	// Look for template within passed path in current theme or in root of the theme
	$template = locate_template(
		array(
			trailingslashit( $template_path ) . $template_name,
			$template_name,
		)
	);

	// Get template from plugin directory
	if ( ! $template ) {
		$template = $default_path . $template_name;
	}

	return apply_filters( 'wp_uikit2_blocks_locate_template', $template, $template_name, $template_path );
}
