#!/usr/bin/env sh

set -e

# Install WordPress.
wp core install \
  --title="WP Plugins Dev" \
  --admin_user="wordpress" \
  --admin_password="wordpress" \
  --admin_email="admin@example.com" \
  --url="http://localhost:8080" \
  --skip-email

# Update permalink structure.
wp option update permalink_structure "/%year%/%monthnum%/%postname%/" --skip-themes --skip-plugins

# Active the last theme.
wp theme activate twentyseventeen

# Activate plugin.
wp plugin activate honkify
