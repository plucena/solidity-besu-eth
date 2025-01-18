start besu developer mode

besu \
  --miner-enabled \
  --miner-coinbase=0xfe3b557e8fb62b89f4916b721be55ceb828dbd73 \
  --rpc-http-cors-origins="all" \
  --host-allowlist="*" \
  --rpc-ws-enabled \
  --rpc-http-enabled \
  --data-path=/tmp/tmpDatdir \
  --rpc-http-api=ETH,NET,WEB3 \
  --rpc-ws-api=ETH,NET,WEB3
  
