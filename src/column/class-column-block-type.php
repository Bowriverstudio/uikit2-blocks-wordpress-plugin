<?php
/**
 * Register wp-uikit2-blocks/column block type.
 *
 * @package wp-uikit2-blocks/column
 */

namespace WP_UiKit2_Blocks\Column;

use WP_UiKit2_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( '\WP_UiKit2_Blocks\Column\Column_Block_Type', false ) ) :

	/**
	 * Class Column_Block_Type
	 */
	class Column_Block_Type extends Block_Type {
		/**
		 * Name of block type including namespace.
		 *
		 * @var string
		 */
		protected $name = 'wp-uikit2-blocks/column';

		/**
		 * Block attributes.
		 *
		 * @var array
		 */
		protected $attributes = array(
			'sizeXl' => array(
				'type' => 'number',
			),
			'sizeLg' => array(
				'type' => 'number',
			),
			'sizeMd' => array(
				'type' => 'number',
			),
			'sizeSm' => array(
				'type' => 'number',
			),
			'sizeXs' => array(
				'type' => 'number',
			),
			'bgColor' => array(
				'type' => 'string',
			),
			'padding' => array(
				'type' => 'string',
			),
			'centerContent' => array(
				'type' => 'boolean',
			),
		);

		/**
		 * Default values of block attributes.
		 *
		 * @var array
		 */
		protected $default_attributes = array(
			'sizeXl' => 0,
			'sizeLg' => 0,
			'sizeMd' => 0,
			'sizeSm' => 0,
			'sizeXs' => 12,
			'bgColor' => '',
			'padding' => '',
			'centerContent' => false,
		);
	}

endif;
