help: ##Show this help.
	@echo "Usage: make [options] [target] ..."; \
	echo "Targets"; \
	fgrep -h '##' Makefile | awk -F'##|: ' '{printf "%40s %s\n", $$1,$$3}' | fgrep -v 'fgrep';

dev: ## serve for development
	@echo "starting Dev environment"
	@au run --open

