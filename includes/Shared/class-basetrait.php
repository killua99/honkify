<?php
/**
 * Contains Goose\Shared\BaseTrait
 *
 * @package honkify
 */

namespace Goose\Shared;

defined( 'ABSPATH' ) || die();

trait BaseTrait {

	/** @var self */
	protected static $instance;

	/** @var string Plugin Slug. */
	protected static $plugin_slug = 'honkify';

	/** @var string Text Domain. */
	protected static $text_domain = 'honkify';

	/** @var string Text Domain Path. */
	protected static $text_domain_path = GOOSE_PLUGIN_PATH . '/languages';

	/**
	 * Get class instance
	 *
	 * @return self
	 */
	public static function get_instance() : self {
		return self::$instance ?? new self();
	}

}
