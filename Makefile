CURRENT_BRANCH_NAME := $(shell git log --pretty='%s' -1)

publish:
	gh release create $(CURRENT_BRANCH_NAME) --notes "test" --target main --title "Release test"