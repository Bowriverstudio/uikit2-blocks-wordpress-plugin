<?php
/**
 * Register wp-uikit2-blocks/grid block type.
 *
 * @package wp-uikit2-blocks/grid
 */

namespace WP_UiKit2_Blocks\Grid;

use WP_UiKit2_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( '\WP_UiKit2_Blocks\Grid\Grid_Block_Type', false ) ) :

	/**
	 * Class Grid_Block_Type
	 */
	class 	Grid_Block_Type extends Block_Type {
		/**
		 * Name of block type including namespace.
		 *
		 * @var string
		 */
		protected $name = 'wp-uikit2-blocks/grid';

		/**
		 * Block attributes.
		 *
		 * @var array
		 */
		protected $attributes = array(
			'gridGutter' => array (
				'type' => 'string',
			),
			'centerGrid' => array(
				'type' => 'boolean',
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
