#!/bin/bash

# Only start container if all ENV vars are provided
[ -z "$APPCENTER_BASE_URL" ] && echo "Need to set APPCENTER_BASE_URL" && exit 1;

contextPath="/"

# If APP_CONTEXT_PATH is empty, we default it to `/`
if [[ "$APP_CONTEXT_PATH" ]];
then
  if [[ "$APP_CONTEXT_PATH" != "/" ]];
  then
    contextPath="$APP_CONTEXT_PATH/"
  fi
fi

# Add a config file from env
cat <<EOF> /usr/share/nginx/html/config.js
var config = {
  VANTAGE_URL: '$APPCENTER_BASE_URL',
};
EOF
# Replace href before deploying
sed -i -e "s|<base href=\"/\" />|<base href=\"$contextPath\" />|g" /usr/share/nginx/html/index.html
# Filter the BaseURL into nginx.conf
sed -i -e "s|VANTAGEBASEURL|$APPCENTER_BASE_URL|g" /etc/nginx/conf.d/default.conf

# Start nginx
echo "Starting nginx..."
nginx -g "daemon off;"
