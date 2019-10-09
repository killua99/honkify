<?php
/**
 * Honkify
 *
 * @package honkify
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU General Public License, version 2 or higher
 * @wordpress-plugin
 *
 * Plugin Name:  Honkify
 * Plugin URI:   https://github.com/killua99/honkify
 * Description:  Need a little more chaos in your life?
 * Text Domain:  honkify
 * Domain Path:  /languages/
 * Version:      1.0.0
 * Requires PHP: 7.1
 * Author:       Luigi Guevara <guevara.luigi@gmail.com>
 * Author URI:   https://killua.me/
 * License:      GPL-2.0+
 */

defined( 'ABSPATH' ) || die();

define( 'GOOSE_VERSION', '1.0.0' );
define( 'GOOSE_FILE', __FILE__ );
define( 'GOOSE_PLUGIN_PATH', __DIR__ );
define( 'GOOSE_PLUGIN_URL', rtrim( plugins_url( '/', GOOSE_FILE ), '/' ) );

if ( ! class_exists( \Goose\Main::class ) && is_file( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once __DIR__ . '/vendor/autoload.php';
}

\Goose\Main::bootstrap();
