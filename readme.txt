=== Honkify ===
Contributors: killua99
Donate link: https://killua.me/
Tags: goose, honk
Requires at least: 5.0
Tested up to: 5.2.3
Requires PHP: 7.1
Stable tag: 1.0.1
License: GPLv2
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Need a little more chaos in your life?

== Description ==

This plugin use the library: https://honkify.netlify.com

## What does Honkify do?

When activated by pressing the key "Y", all links and buttons on the site will stop working, instead triggering a “honk!” sound effect.

This is not transpiled and not tested on any browsers except Chrome latest and Firefox lasted, because this is a silly joke and therefore honk honk honk!

## Options

Honkify support 3 options to be a little flexible.

1) `get_option( 'goose_active', true )` An extra toggle to dynamic toggle the honk, think for pages that 100% you don't want the honk but others you do.
2) `get_option( 'goose_hotkey', 'y' )` Setup your custom hotkey to enable the honk!
3) `get_option( 'goose_loose', 'lock' )` Default value to determine whether the goose is lock or loose by default.

## Install honkify from within WordPress

1) Visit the plugins page within your dashboard and select ‘Add New’;
2) Search for 'Honkify'
3) Activate Honkify from the Plugins page

## Install honkify manually

1) Upload the honkify folder into the `wp-content/plugins/` directory
2) Activate Honkify from the Plugins page

## Install honkify with composer

1) Run in your command line `composer require wpackagist-plugin/yoast-comment-hacks`
2) Activate Honkify from the Plugins page

== Changelog ==

1.0.0 - 2019-10-11

- Release plugin
