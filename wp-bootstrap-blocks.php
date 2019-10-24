<?php
/**
 * Plugin Name: UiKit2 Blocks
 * Plugin URI: https://github.com/liip/bootstrap-blocks-wordpress-plugin
 * Description: UiKit2 Gutenberg Blocks for WordPress.
 * Author: Liip AG
 * Author URI: https://liip.ch
 * Version: 1.3.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: wp-uikit2-blocks
 * Domain Path: /languages/
 *
 * @package wp-uikit2-blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define WP_UIKIT2_BLOCKS_PLUGIN_FILE.
if ( ! defined( 'WP_UIKIT2_BLOCKS_PLUGIN_FILE' ) ) {
	define( 'WP_UIKIT2_BLOCKS_PLUGIN_FILE', __FILE__ );
}

// Include the main WP_Bootstrap_Blocks class.
if ( ! class_exists( \WP_Bootstrap_Blocks\WP_Bootstrap_Blocks::class ) ) {
	require_once plugin_dir_path( WP_UIKIT2_BLOCKS_PLUGIN_FILE ) . 'src/class-wp-bootstrap-blocks.php';
}

// Initialize plugin
\WP_Bootstrap_Blocks\WP_Bootstrap_Blocks::instance();
