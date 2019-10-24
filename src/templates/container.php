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

$classes = array( 'wp-uikit2-blocks-container' );

if ( array_key_exists( 'isFluid', $attributes ) && $attributes['isFluid'] ) {
	array_push( $classes, 'container-fluid' );
} else {
	array_push( $classes, 'container' );
}
if ( array_key_exists( 'marginAfter', $attributes ) && ! empty( $attributes['marginAfter'] ) ) {
	array_push( $classes, $attributes['marginAfter'] );
}
if ( array_key_exists( 'className', $attributes ) ) {
	array_push( $classes, $attributes['className'] );
}

$classes = apply_filters( 'wp_uikit2_blocks_container_classes', $classes, $attributes );
?>
<div class="<?php echo esc_attr( implode( ' ', $classes ) ); ?>">
	<?php echo $content; // phpcs:ignore ?>
</div>
