#!/bin/bash

group_kill() {
	pgid=$(tail /proc/$1/stat | awk '{print $5}')
	kill -TERM -- -$pgid
}

pid_file="/dev/shm/cdoc_pids"
export $(tail $pid_file)

if [[ -z $PID_FRONTEND || -z $PID_BACKEND ]]; then
	echo "Cdoc service is not running to be killed!"
	exit
fi

case $1 in
	frontend )
		group_kill $PID_FRONTEND 
		sed "PID_FRONTEND/d" $pid_file ;;
	backend )
		kill $PID_BACKEND
		sed "PID_BACKEND/d" $pid_file ;;
	*)
		kill $PID_BACKEND
		group_kill $PID_FRONTEND
		rm $pid_file ;;
esac

