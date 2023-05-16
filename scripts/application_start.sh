#!/bin/bash
sudo chmod -R 777 /home/ec2-user/hms-app
#navigate into our working directory where we have all our github files
cd /home/ec2-user/hms-app

#add npm and node to path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # loads nvm
[ -s "$NVM_DIR/bash_completion"] && \. "$NVM_DIR/bash_completion" # loads nvm bash_completion

#install node module
npm install

#start our node app in the background
node server.js > server.out.log 2> server.err.log < /dev/null & 