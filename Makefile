datetime=`date +%Y%m%d-%H%M`
server_log_dir=logs
server_log=server_$(datetime).log
symfony_log=$(server_log_dir)/symfony/$(server_log)
webpack_log=$(server_log_dir)/webpack/$(server_log)

build:
	@composer install
	@yarn install

certificate:
	@symfony server:ca:install

clean:
	@find logs/ -name '*.log' -exec rm -f {} \+
	@rm -rf var
	@rm -rf vendor
	@rm -rf public/build
	@rm -rf public/bundles

delete-logs dl:
	@find logs/ -name '*.log' -exec rm -rf {} \+

run:
	@symfony serve > $(symfony_log) 2>&1 &
	@yarn dev-server > $(webpack_log) 2>&1 &

stop:
	@ps ax | grep webpack | grep -v grep | awk '{print $$1}' | xargs pkill || true
	@ps ax | grep encore | grep -v grep | awk '{print $$1}' | xargs pkill || true
	@ps ax | grep yarn | grep -v grep | awk '{print $$1}' | xargs pkill || true
	@symfony server:stop

tail-symfony ts:
	@find $(server_log_dir)/symfony -name "*.log" | sort -r | head -1 | xargs tail -f

tail-webpack tw:
	@find $(server_log_dir)/webpack -name "*.log" | sort -r | head -1 | xargs tail -f


