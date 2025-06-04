#!/bin/bash
cd /tmp/kavia/workspace/code-generation/tictactoe-classic-614472-4b58fd2a/tictactoe_container
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

