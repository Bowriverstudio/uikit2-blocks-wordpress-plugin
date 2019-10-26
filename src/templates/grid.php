<?php
/**
 * Template for wp-uikit2-blocks/container
 *
 * This template can be overridden by copying it to theme/wp-uikit2-blocks/container.php.
 *
 * @package wp-uikit2-blocks/templates/container
 * @version 1.0.0
 */

/**
 * Block attributes.
 * Defined in wp_uikit2_blocks_get_template() which requires this template.
 *
 * @var $attributes array
 */

/**
 * Block content.
 * Defined in wp_uikit2_blocks_get_template() which requires this template.
 *
 * @var $content string
 */

$classes = array( 'wp-uikit2-blocks-grid', 'uk-grid' );

//ddd($attributes);
// Center
if ( array_key_exists( 'centerGrid', $attributes ) && $attributes['centerGrid'] ) {
	array_push( $classes, 'uk-container-center' );
}

// Grid Gutter
if ( array_key_exists( 'gridGutter', $attributes ) && ! empty( $attributes['gridGutter'] ) ) {
	array_push( $classes, $attributes['gridGutter'] );
}

// Advanced Field
if ( array_key_exists( 'className', $attributes ) ) {
	array_push( $classes, $attributes['className'] );
}

$classes = apply_filters( 'wp_uikit2_blocks_container_classes', $classes, $attributes );
?>
<div class="<?php echo esc_attr( implode( ' ', $classes ) ); ?>">
	<?php echo $content; // phpcs:ignore ?>
</div>
