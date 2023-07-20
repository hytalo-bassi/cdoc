#!/bin/bash

start() {
	cd $1
	yarn start &
	keep_pid ${1^^}

	cd ..
}

keep_pid() {
	echo "PID_$1=$!" >> $tmp
}

tmp="/dev/shm/cdoc_pids"

case $1 in
	backend )
		start backend ;;
	frontend )
		start frontend ;;
	* )			
		start backend
		start frontend ;;
esac

cd ..
