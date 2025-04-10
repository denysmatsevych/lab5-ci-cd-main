#!/bin/sh
# wait-for.sh

set -e

host="$1"
shift
cmd="$@"

until nc -z -w 2 "$host" 27017; do
  echo "Waiting for MongoDB at $host to be available..."
  sleep 2
done

echo "MongoDB is up - executing command"
exec $cmd