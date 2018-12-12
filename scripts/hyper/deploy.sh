npm run build
npm run docker:build
hyper load -l starter-kit

OLD_CONTAINER_ID=$(hyper ps -aqf "name=starter-kit")

hyper rm -f $OLD_CONTAINER_ID
hyper run -d --name starter-kit -p 8080:80 starter-kit

IP=$(hyper fip ls | sed -n 2p | xargs)

hyper fip attach $IP starter-kit
hyper ps
open -a "Google Chrome" "http://$IP:8080"
