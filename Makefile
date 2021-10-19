
install_node:
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash	
	source ~/.bashrc
	# nvm list-remote
	nvm install v12.22.6
	nvm use v12.22.6
	nodejs -v
