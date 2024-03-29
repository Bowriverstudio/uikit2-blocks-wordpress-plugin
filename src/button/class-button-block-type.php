<?php
/**
 * Register wp-uikit2-blocks/button block type.
 *
 * @package wp-uikit2-blocks/button
 */

namespace WP_UiKit2_Blocks\Button;

use WP_UiKit2_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( '\WP_UiKit2_Blocks\Button\Button_Block_Type', false ) ) :

	/**
	 * Class Button_Block_Type
	 */
	class Button_Block_Type extends Block_Type {
		/**
		 * Name of block type including namespace.
		 *
		 * @var string
		 */
		protected $name = 'wp-uikit2-blocks/button';

		/**
		 * Block attributes.
		 *
		 * @var array
		 */
		protected $attributes = array(
			'url' => array(
				'type' => 'string',
			),
			'text' => array(
				'type' => 'string',
			),
			'style' => array(
				'type' => 'string',
			),
			'alignment' => array(
				'type' => 'string',
			),
		);

		/**
		 * Default values of block attributes.
		 *
		 * @var array
		 */
		protected $default_attributes = array(
			'url' => '',
			'text' => '',
			'style' => '',
			'alignment' => '',
		);
	}

endif;
