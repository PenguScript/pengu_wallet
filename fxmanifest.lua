fx_version "cerulean"

description "pengu_wallet"
author "PenguScripts"
version 'v1.0.0'
repository 'https://github.com/PenguScript/pengu_wallet'

lua54 'yes'

games {
  "gta5",
  "rdr3"
}

ui_page 'web/build/index.html'

client_script "client/**/*"
server_script "server/**/*"

files {
	'web/build/index.html',
	'web/build/**/*',
}