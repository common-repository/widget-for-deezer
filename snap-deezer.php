<?php

/**
 * Plugin Name:       Widget for Deezer
 * Description:       Embed a deezer track or other media in your WordPress site.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            JelloBow
 * License:           GPL-3.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       jellobow-snap-deezer
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_snap_block_init()
{
	register_block_type(
		__DIR__ . '/build',
		array(
			"render_callback" => "create_block_snap_render_callback",
			"attributes" => array(
				"url" => array(
					"type" => "string",
					"default" => "",
				),
			)
		)
	);
}
add_action('init', 'create_block_snap_block_init');

function create_block_snap_render_callback($block_attributes, $content)
{
	$path = explode("/", parse_url($block_attributes["url"])["path"]);
	$url_suffix = "";
	if (strpos($block_attributes["url"], "artist") !== false) {
		$url_suffix = "top_tracks";
	}
	$url = "https://widget.deezer.com/widget/auto/" . $path[count($path) - 2] . "/" . $path[count($path) - 1] . "/" . $url_suffix;
	$wrapper_attributes = get_block_wrapper_attributes();
	return sprintf('<div %1$s><iframe
	title="deezer-widget"
	src="%2$s"
	frameborder="0"
	allowtransparency="true"
	allow="encrypted-media; clipboard-write"
	width="100%%"
	></iframe></div>',
	$wrapper_attributes,
	$url);
}
