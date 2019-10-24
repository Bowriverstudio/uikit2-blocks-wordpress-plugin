<?php
/**
 * Register wp-uikit2-blocks/container block type.
 *
 * @package wp-uikit2-blocks/container
 */

namespace WP_UiKit2_Blocks\Container;

use WP_UiKit2_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( '\WP_UiKit2_Blocks\Container\Container_Block_Type', false ) ) :

	/**
	 * Class Container_Block_Type
	 */
	class Container_Block_Type extends Block_Type {
		/**
		 * Name of block type including namespace.
		 *
		 * @var string
		 */
		protected $name = 'wp-uikit2-blocks/container';

		/**
		 * Block attributes.
		 *
		 * @var array
		 */
		protected $attributes = array(
			'isFluid' => array(
				'type' => 'boolean',
			),
			'marginAfter' => array(
				'type' => 'string',
			),
		);

		/**
		 * Default values of block attributes.
		 *
		 * @var array
		 */
		protected $default_attributes = array(
			'isFluid' => false,
			'marginAfter' => 'mb-2',
		);
	}

endif;
