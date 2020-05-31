#!/bin/bash

set -e

cd "$(dirname "$0")"

if [ $# -ne 1 ]; then
  echo "Usage: $0 <bucket-name>"
  exit 1
fi

ng build --prod
aws s3 rm "s3://$1/" --recursive
aws s3 sync dist/angular-app/. "s3://$1" --acl public-read
