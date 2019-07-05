#!/bin/bash

# Only start container if all ENV vars are provided
[ -z "$APPCENTER_BASE_URL" ] && echo "Need to set APPCENTER_BASE_URL" && exit 1;

# Add a config file from env
cat <<EOF> /usr/share/app/config.js
var config = {
  VANTAGE_URL: '$APPCENTER_BASE_URL',
};
EOF

# Start nodejs
echo "Starting nodejs..."
npm --prefix /usr/share/app start
