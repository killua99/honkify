<?php
/**
 * Contains Goose\Main
 *
 * @package honkify
 */

namespace Goose;

defined( 'ABSPATH' ) || die();

use Goose\Shared\BaseTrait;

/**
 * Class Main
 *
 * @package Media_File_System
 */
class Main {

	use BaseTrait;

	/**
	 * Bootstrap the plugin.
	 */
	public static function bootstrap() : void {
		add_action( 'plugins_loaded', [ self::class, 'plugins_loaded' ] );
		add_action( 'wp_enqueue_scripts', [ self::class, 'wp_enqueue_scripts' ] );
	}

	/**
	 * Hook: plugins_loaded.
	 */
	public static function plugins_loaded() : void {
		load_plugin_textdomain( self::$text_domain, false, self::$text_domain_path );
	}

	/**
	 * Hook: wp_enqueue_scripts
	 */
	public static function wp_enqueue_scripts() : void {
		wp_enqueue_script( 'honkify', GOOSE_PLUGIN_URL . '/assets/js/honkify.js', [], 12313, true );
		wp_localize_script(
			'honkify',
			'goose',
			[
				'active' => get_option( 'goose_active', true ),
				'hotKey' => get_option( 'goose_hotkey', 'y' ),
				'state'  => get_option( 'goose_loose', 'lock' ),
			]
		);
	}
}
