#!/bin/bash

#
# Dynamically build each bootswatch theme less file
# - since we want each theme compiled into build
#

for path in ../../../vendor/bootswatch/*/; do
  theme=`basename $path`;
  if [ "$theme" != "fonts" ]; then
    echo "Created LESS file for $theme";
  
    b1="@import '../../../../vendor/bootstrap/less/bootstrap.less';"
    b2="@import '../../../../vendor/bootswatch/$theme/bootswatch.less';"
    v1="@import '../../../../vendor/bootswatch/$theme/variables.less';"
    less="$b1\n$b2\n$v1"
  
    if [ ! -d "$theme" ]; then
      mkdir $theme
    fi
    printf "$less" > "$theme/$theme.less"
  fi
done

